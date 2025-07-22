import Lettie from "@/shared/assets/character/lettie_static.png";
import CloseIcon from "@/shared/assets/icon/close.svg";
import Popup from "@/shared/ui/popup";
import Image from "next/image";
import * as styles from "./popup-intro.css";

interface PopupIntroProps {
  isOpen: boolean;
  close: () => void;
}

const PopupIntro = ({ isOpen, close }: PopupIntroProps) => {
  return (
    <Popup open={isOpen} className={styles.root} close={close}>
      <div className={styles.layout}>
        <div className={styles.popupContainer}>
          <button type="button" className={styles.closeButton} onClick={close}>
            <CloseIcon />
          </button>
          <Image src={Lettie} alt="Lettie character" />
          <div className={styles.captionWrapper}>
            <p>레티가 여러분을</p>
            <p>기다리고 있어요!</p>
          </div>
          <div className={styles.buttonWrapper}>
            <button
              type="button"
              className={styles.buttonStyle}
              onClick={close}
            >
              레티가 뭘까?
            </button>
          </div>
        </div>
        <div className={styles.checkboxContainer}>
          <input type="radio" className={styles.radio} />
          <p>오늘 하루 보지 않기</p>
        </div>
      </div>
    </Popup>
  );
};

export default PopupIntro;
