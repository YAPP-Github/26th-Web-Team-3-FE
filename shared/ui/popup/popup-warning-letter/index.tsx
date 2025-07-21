import WarningIcon from "@/shared/assets/icon/warning.svg";
import Popup from "@/shared/ui/popup";
import * as styles from "./popup-warning-letter.css";
const PopupWarningLetter = () => {
  return (
    <div className={styles.layout}>
      <Popup>
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
          <button className={styles.backButton}>돌아가기</button>
          <button className={styles.continueButton}>계속 쓰기</button>
        </Popup.Actions>
      </Popup>
    </div>
  );
};

export default PopupWarningLetter;
