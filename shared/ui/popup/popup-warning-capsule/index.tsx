import WarningIcon from "@/shared/assets/icon/warning.svg";
import Popup from "@/shared/ui/popup";
import * as styles from "./popup-warning-capsule.css";

interface PopupWarningCapsuleProps {
  isOpen: boolean;
  close: () => void;
  onConfirm: () => void;
}

const PopupWarningCapsule = ({
  isOpen,
  close,
  onConfirm,
}: PopupWarningCapsuleProps) => {
  return (
    <Popup open={isOpen} close={close}>
      <div className={styles.iconWrapper}>
        <WarningIcon width={24} height={24} />
      </div>
      <Popup.Title>정말 캡슐을 떠나시겠어요?</Popup.Title>
      <Popup.Content>
        <p>떠나면 이 캡슐은 본인에게 보이지 않으며,</p>
        <p>다시 참여할 수도 없습니다.</p>
        <p>작성한 편지도 확인할 수 없습니다.</p>
      </Popup.Content>
      <Popup.Actions>
        <Popup.Button onClick={close}>취소</Popup.Button>
        <Popup.Button className={styles.continueButton} onClick={onConfirm}>
          떠나기
        </Popup.Button>
      </Popup.Actions>
    </Popup>
  );
};

export default PopupWarningCapsule;
