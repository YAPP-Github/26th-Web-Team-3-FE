import Popup from "@/shared/ui/popup";
import * as styles from "./popup-exit-lettie.css";

const PopupExitLettie = () => {
  return (
    <div className={styles.layout}>
      <Popup>
        <Popup.Title className={styles.title}>레티를 떠나시나요?</Popup.Title>
        <Popup.Content>떠나기 전에 꼭 확인해주세요!</Popup.Content>
        <div className={styles.captionContainer}>
          <div className={styles.captionBox}>
            <p className={styles.captionTitle}>편지는 그대로 ✅</p>
            <p className={styles.captionContent}>
              참여 중이던 타임캡슐에 담긴 편지들은
            </p>
            <p className={styles.captionContent}>삭제되지 않아요.</p>
          </div>
          <div className={styles.captionBox}>
            <p className={styles.captionTitle}>자동으로 퇴장됩니다 🚪</p>
            <p className={styles.captionContent}>
              레티를 떠나면 참여 중이던 타임캡슐에서{" "}
            </p>
            <p className={styles.captionContent}>자동으로 나가게 돼요.</p>
          </div>
        </div>
        <div className={styles.inputText}>
          <input type="radio" className={styles.radio} /> 확인했어요. 레티를
          떠날게요.
        </div>
        <Popup.Actions>
          <button className={styles.actions}>취소</button>
          <button className={styles.actions}>탈퇴하기</button>
        </Popup.Actions>
      </Popup>
    </div>
  );
};

export default PopupExitLettie;
