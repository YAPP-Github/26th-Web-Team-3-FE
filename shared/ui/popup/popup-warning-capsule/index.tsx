import WarningIcon from "@/shared/assets/icon/warning.svg";
import Popup from "@/shared/ui/popup";
import * as styles from "./popup-warning-capsule.css";

interface PopupWarningCapsuleProps {
  isOpen: boolean;
  close: () => void;
}

const PopupWarningCapsule = ({ isOpen, close }: PopupWarningCapsuleProps) => {
  return (
    <Popup open={isOpen} close={close}>
      <div className={styles.iconWrapper}>
        <WarningIcon width={24} height={24} />
      </div>
      <Popup.Title>정말 캡슐을 떠나시겠어요?</Popup.Title>
      <Popup.Content>
        <p>나가면 다시 캡슐에 참여할 수 없으며,</p>
        <p>담은 편지가 사라지지 않아요.</p>
      </Popup.Content>
      <Popup.Actions>
        <Popup.Button onClick={close}>돌아가기</Popup.Button>
        <Popup.Button className={styles.continueButton} onClick={close}>
          계속 쓰기
        </Popup.Button>
      </Popup.Actions>
    </Popup>
  );
};

export default PopupWarningCapsule;
