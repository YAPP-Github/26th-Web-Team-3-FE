import Popup from "@/shared/ui/popup";
import * as styles from "./popup-exit.css";

const PopupExit = () => {
  return (
    <div className={styles.layout}>
      <Popup>
        <Popup.Title className={styles.title}>만들기를 그만할까요?</Popup.Title>
        <Popup.Content>
          <p>나가면 처음부터 다시 만들어야 해요 😢</p>
        </Popup.Content>
        <Popup.Actions>
          <button className={styles.backButton}>떠나기</button>
          <button className={styles.continueButton}>남기</button>
        </Popup.Actions>
      </Popup>
    </div>
  );
};

export default PopupExit;
