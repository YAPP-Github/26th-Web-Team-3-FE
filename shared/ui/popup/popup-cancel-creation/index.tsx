import Popup from "@/shared/ui/popup";
import * as styles from "./popup-cancel-creation.css";

interface PopupCancelCreationProps {
  isOpen: boolean;
  close: () => void;
}

const PopupCancelCreation = ({ isOpen, close }: PopupCancelCreationProps) => {
  return (
    <Popup open={isOpen}>
      <Popup.Title className={styles.title}>만들기를 그만할까요?</Popup.Title>
      <Popup.Content>
        <p>나가면 처음부터 다시 만들어야 해요 😢</p>
      </Popup.Content>
      <Popup.Actions>
        <button className={styles.backButton} onClick={close}>
          떠나기
        </button>
        <button className={styles.continueButton} onClick={close}>
          남기기
        </button>
      </Popup.Actions>
    </Popup>
  );
};

export default PopupCancelCreation;
