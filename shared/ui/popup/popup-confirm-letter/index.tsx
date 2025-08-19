import Lettie from "@/shared/assets/character/lettie_animate.png";
import Popup from "@/shared/ui/popup";

import Image from "next/image";
import * as styles from "./popup-confirm-letter.css";

interface PopupConfirmLetterProps {
  openDate: string;
  isOpen: boolean;
  close: () => void;
  onConfirm: () => void;
}

const PopupConfirmLetter = ({
  openDate,
  isOpen,
  close,
  onConfirm,
}: PopupConfirmLetterProps) => {
  return (
    <Popup open={isOpen} close={close}>
      <Popup.Title className={styles.title}>
        <p>캡슐이 열리는 날</p>
        <p>이메일로 알려드려요!</p>
      </Popup.Title>
      <Popup.Content className={styles.openDate}>
        <p>{openDate}에 열려요</p>
      </Popup.Content>
      <Image src={Lettie} alt="apng" width={200} height={200} />
      <Popup.Actions>
        <Popup.Button onClick={close}>계속 쓰기</Popup.Button>
        <Popup.Button className={styles.putButton} onClick={onConfirm}>
          편지 담기
        </Popup.Button>
      </Popup.Actions>
    </Popup>
  );
};

export default PopupConfirmLetter;
