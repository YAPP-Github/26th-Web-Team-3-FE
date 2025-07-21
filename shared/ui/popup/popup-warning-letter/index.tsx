import WarningIcon from "@/shared/assets/icon/warning.svg";
import Popup from "@/shared/ui/popup";
import * as styles from "./popup-warning-letter.css";

interface PopupWarningLetterProps {
  isOpen: boolean;
  close: () => void;
}

const PopupWarningLetter = ({ isOpen, close }: PopupWarningLetterProps) => {
  if (!isOpen) return null;
  return (
    <div className={styles.layout}>
      <Popup open={isOpen}>
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
          <button className={styles.backButton} onClick={close}>
            돌아가기
          </button>
          <button className={styles.continueButton} onClick={close}>
            계속 쓰기
          </button>
        </Popup.Actions>
      </Popup>
    </div>
  );
};

export default PopupWarningLetter;
