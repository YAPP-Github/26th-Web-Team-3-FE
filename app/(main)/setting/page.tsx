"use client";
import { useLogout } from "@/app/(auth)/_api/auth.queries";
import { userQueryOptions } from "@/shared/api/queries/user";
import PopupLogout from "@/shared/ui/popup/popup-logout";
import { useQuery } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import SettingItem from "./_components/setting-item";
import SettingSection from "./_components/setting-section";
import UserGreetingSection from "./_components/user-greeting-section";

import { overlay } from "overlay-kit";
import * as styles from "./page.css";

const Setting = () => {
  const { mutate: logout } = useLogout();
  const router = useRouter();
  const queryClient = useQueryClient();
  const { data: userInfo } = useQuery(userQueryOptions.userInfo({}));

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
          <SettingItem>문의하기</SettingItem>
        </SettingSection>
        <SettingSection>
          <SettingItem
            onClick={() =>
              overlay.open(({ isOpen, close }) => (
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
          <SettingItem>탈퇴하기</SettingItem>
        </SettingSection>
      </div>
    </div>
  );
};

export default Setting;
