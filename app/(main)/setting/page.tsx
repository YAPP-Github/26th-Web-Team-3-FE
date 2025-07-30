import SettingItem from "./_components/setting-item";
import SettingSection from "./_components/setting-section";
import UserGreetingSection from "./_components/user-greeting-section";
import * as styles from "./page.css";

const Setting = () => {
  return (
    <div className={styles.settingPage}>
      <UserGreetingSection />
      <div className={styles.itemsContainer}>
        <SettingSection category="서비스 정보">
          <SettingItem>이용약관</SettingItem>
          <SettingItem>개인정보 취급 방침</SettingItem>
        </SettingSection>
        <SettingSection category="고객센터">
          <SettingItem>문의하기</SettingItem>
        </SettingSection>
        <SettingSection>
          <SettingItem>로그아웃</SettingItem>
          <SettingItem>탈퇴하기</SettingItem>
        </SettingSection>
      </div>
    </div>
  );
};

export default Setting;
