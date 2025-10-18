"use client";
import { useLogout } from "@/app/(auth)/_api/auth.queries";
import { userQueryOptions } from "@/shared/api/queries/user";
import { HTTP_STATUS_CODE } from "@/shared/constants/api";
import { PATH } from "@/shared/constants/path";
import { useOverlay } from "@/shared/hooks/use-overlay";
import PopupLogout from "@/shared/ui/popup/popup-logout";
import PopupReport from "@/shared/ui/popup/popup-report";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { HTTPError } from "ky";
import { useRouter } from "next/navigation";
import SettingItem from "./_components/setting-item";
import SettingSection from "./_components/setting-section";
import UserGreetingSection from "./_components/user-greeting-section";
import * as styles from "./page.css";

const Setting = () => {
  const { mutate: logout } = useLogout();
  const router = useRouter();
  const queryClient = useQueryClient();
  const { data: userInfo } = useQuery(
    userQueryOptions.userInfo({
      onError: (error) => {
        if (
          error instanceof HTTPError &&
          error.response.status === HTTP_STATUS_CODE.UNAUTHORIZED
        ) {
          router.replace(PATH.LOGIN);
        }
      },
    }),
  );
  const { open } = useOverlay();

  const handleLogout = () => {
    logout(undefined, {
      onSuccess: () => {
        queryClient.clear();
        router.replace("/");
      },
    });
  };

  return (
    <div className={styles.settingPage}>
      <UserGreetingSection userName={userInfo?.result.nickname || ""} />
      <div className={styles.itemsContainer}>
        <SettingSection category="서비스 정보">
          <SettingItem onClick={() => router.push(PATH.TERMS)}>
            이용약관
          </SettingItem>
          <SettingItem onClick={() => router.push(PATH.PRIVACY)}>
            개인정보 처리방침
          </SettingItem>
        </SettingSection>
        <SettingSection category="고객센터">
          <SettingItem
            onClick={() =>
              open(({ isOpen, close }) => (
                <PopupReport isOpen={isOpen} close={close} />
              ))
            }
          >
            문의하기
          </SettingItem>
          <SettingItem
            onClick={() =>
              open(({ isOpen, close }) => (
                <PopupLogout
                  isOpen={isOpen}
                  close={close}
                  onLogout={handleLogout}
                />
              ))
            }
          >
            로그아웃
          </SettingItem>
        </SettingSection>
        <p className={styles.warningText}>
          *회원탈퇴는 '문의하기'를 이용해주세요.
        </p>
      </div>
    </div>
  );
};

export default Setting;
