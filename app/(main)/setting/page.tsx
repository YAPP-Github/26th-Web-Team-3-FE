"use client";
import { HTTPError } from "ky";
import { HTTP_STATUS_CODE } from "@/shared/constants/api";
import { useLogout } from "@/app/(auth)/_api/auth.queries";
import { userQueryOptions } from "@/shared/api/queries/user";
import PopupReport from "@/shared/ui/popup/popup-report";
import PopupLogout from "@/shared/ui/popup/popup-logout";
import { useQuery } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import SettingItem from "./_components/setting-item";
import SettingSection from "./_components/setting-section";
import UserGreetingSection from "./_components/user-greeting-section";
import { useOverlay } from "@/shared/hooks/use-overlay";
import { PATH } from "@/shared/constants/path";
import * as styles from "./page.css";

const Setting = () => {
  const { mutate: logout } = useLogout();
  const router = useRouter();
  const queryClient = useQueryClient();
  const { data: userInfo } = useQuery(userQueryOptions.userInfo({
    onError: (error) => {
      if (error instanceof HTTPError && error.response.status === HTTP_STATUS_CODE.UNAUTHORIZED) {
         router.replace(PATH.LOGIN);
}
    },
  }));
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
          <SettingItem>이용약관</SettingItem>
          <SettingItem>개인정보 취급 방침</SettingItem>
        </SettingSection>
        <SettingSection category="고객센터">
          <SettingItem onClick={() =>
              open(({ isOpen, close }) => (
                <PopupReport
                  isOpen={isOpen}
                  close={close}
                />
              ))
            }>문의하기</SettingItem>
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
        <p className={styles.warningText}>*회원탈퇴는 '문의하기'를 이용해주세요. </p>
      </div>
    </div>
  );
};

export default Setting;
