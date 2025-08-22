import WarningIcon from "@/shared/assets/icon/warning.svg";
import Popup from "@/shared/ui/popup";
import * as styles from "./popup-logout.css";

interface PopupLogoutProps {
  isOpen: boolean;
  close: () => void;
  onLogout: () => void;
}

const PopupLogout = ({ isOpen, close, onLogout }: PopupLogoutProps) => {
  return (
    <Popup open={isOpen} close={close}>
      <div className={styles.iconWrapper}>
        <WarningIcon width={24} height={24} />
      </div>
      <Popup.Title className={styles.caption}>
        <p>로그아웃 하시겠어요?</p>
      </Popup.Title>
      <Popup.Actions>
        <Popup.Button onClick={close} className={styles.content}>취소</Popup.Button>
        <Popup.Button
          className={styles.putButton}
          onClick={() => {
            onLogout();
            close();
          }}
        >
          로그아웃
        </Popup.Button>
      </Popup.Actions>
    </Popup>
  );
};

export default PopupLogout;
