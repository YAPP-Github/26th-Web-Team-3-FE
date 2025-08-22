import WarningIcon from "@/shared/assets/icon/warning.svg";
import Popup from "@/shared/ui/popup";
import * as styles from "./popup-warning-letter.css";

interface PopupWarningLetterProps {
  isOpen: boolean;
  close: () => void;
  confirm: () => void;
  onGoBack?: () => void;
}

const PopupWarningLetter = ({
  isOpen,
  close,
  confirm,
  onGoBack,
}: PopupWarningLetterProps) => {
  return (
    <Popup open={isOpen} close={close}>
      <div className={styles.iconWrapper}>
        <WarningIcon width={24} height={24} />
      </div>
      <Popup.Title>
        <div className={styles.titleWrapper}>
          <p>지금 돌아가면</p>
          <p>편지 내용이 사라져요</p>
        </div>
      </Popup.Title>
      <Popup.Actions>
        <Popup.Button onClick={onGoBack || close} className={styles.content}>
          돌아가기
        </Popup.Button>
        <Popup.Button
          className={styles.continueButton}
          onClick={(e) => {
            e.stopPropagation();
            confirm();
          }}
        >
          계속 쓰기
        </Popup.Button>
      </Popup.Actions>
    </Popup>
  );
};

export default PopupWarningLetter;
