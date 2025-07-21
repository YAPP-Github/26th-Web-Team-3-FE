import LettieCharacter from "@/shared/assets/character/X3.png";
import Popup from "@/shared/ui/popup";
import * as styles from "./popup-confirm-letter.css";

interface PopupConfirmLetterProps {
  openDate: string;
  isOpen: boolean;
  close: () => void;
}

const PopupConfirmLetter = ({
  openDate,
  isOpen,
  close,
}: PopupConfirmLetterProps) => {
  if (!isOpen) return null;
  return (
    <div className={styles.layout}>
      <Popup open={isOpen}>
        <Popup.Title className={styles.title}>
          <p>한 번 편지를 담으면</p>
          <p>꺼낼 수 없어요</p>
        </Popup.Title>
        <Popup.Content>
          <p>{openDate} 에 열려요</p>
        </Popup.Content>
        <img src={LettieCharacter.src} alt="Lettie character" />
        <Popup.Actions>
          <button className={styles.continueButton} onClick={close}>
            계속 쓰기
          </button>
          <button className={styles.putButton} onClick={close}>
            편지 담기
          </button>
        </Popup.Actions>
      </Popup>
    </div>
  );
};

export default PopupConfirmLetter;
