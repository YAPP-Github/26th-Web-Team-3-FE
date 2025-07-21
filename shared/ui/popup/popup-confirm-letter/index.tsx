import Popup from "@/shared/ui/popup";
import LettieCharacter from "../../../assets/pop-up/X3.png";
import * as styles from "./popup-confirm-letter.css";

interface PopupConfirmLetterProps {
  openDate: string;
}

const PopupConfirmLetter = ({ openDate }: PopupConfirmLetterProps) => {
  return (
    <div className={styles.layout}>
      <Popup>
        <Popup.Title className={styles.title}>
          <p>한 번 편지를 담으면</p>
          <p>꺼낼 수 없어요</p>
        </Popup.Title>
        <Popup.Content>
          <p>{openDate} 에 열려요</p>
        </Popup.Content>
        <img src={LettieCharacter.src} alt="Lettie character" />
        <Popup.Actions>
          <button className={styles.continueButton}>계속 쓰기</button>
          <button className={styles.putButton}>편지 담기</button>
        </Popup.Actions>
      </Popup>
    </div>
  );
};

export default PopupConfirmLetter;
