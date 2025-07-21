import Popup from "@/shared/ui/popup";
import WarningIcon from "@/shared/assets/icon/warning.svg";
import * as styles from "./popup-warning-letter.css";

const PopupWarningLetter = () => {
  return (
    <div className={styles.layout}>
      <Popup>
        <div className={styles.iconWrapper}>
            <WarningIcon width={24} height={24} />
        </div>
        <Popup.Title>정말 캡슐을 떠나시겠어요?</Popup.Title>
        <Popup.Content>
            <p>나가면 다시 캡슐에 참여할 수 없으며,</p>
            <p>담은 편지가 사라지지 않아요.</p>
        </Popup.Content>
        <Popup.Actions>
            <button className={styles.backButton}>돌아가기</button>
            <button className={styles.continueButton}>계속 쓰기</button>
        </Popup.Actions>
      </Popup>
    </div>
  );
};

export default PopupWarningLetter;
