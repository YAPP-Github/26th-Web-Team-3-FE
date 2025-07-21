import Lettie from "@/shared/assets/character/lettie_animate.png";
import Popup from "@/shared/ui/popup";

import Image from "next/image";
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
  return (
    <Popup open={isOpen}>
      <Popup.Title className={styles.title}>
        <p>한 번 편지를 담으면</p>
        <p>꺼낼 수 없어요</p>
      </Popup.Title>
      <Popup.Content>
        <p>{openDate} 에 열려요</p>
      </Popup.Content>
      <Image src={Lettie} alt="apng" width={200} height={200} />
      <Popup.Actions>
        <button className={styles.continueButton} onClick={close}>
          계속 쓰기
        </button>
        <button className={styles.putButton} onClick={close}>
          편지 담기
        </button>
      </Popup.Actions>
    </Popup>
  );
};

export default PopupConfirmLetter;
