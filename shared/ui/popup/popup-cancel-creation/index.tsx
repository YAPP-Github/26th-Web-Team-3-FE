import { PATH } from "@/shared/constants/path";
import Popup from "@/shared/ui/popup";
import { useRouter } from "next/navigation";
import * as styles from "./popup-cancel-creation.css";
interface PopupCancelCreationProps {
  isOpen: boolean;
  close: () => void;
}

const PopupCancelCreation = ({ isOpen, close }: PopupCancelCreationProps) => {
  const router = useRouter();
  return (
    <Popup open={isOpen} close={close}>
      <Popup.Title className={styles.title}>만들기를 그만할까요?</Popup.Title>
      <Popup.Content className={styles.content}>
        <p>나가면 처음부터 다시 만들어야 해요 😢</p>
      </Popup.Content>
      <Popup.Actions>
        <Popup.Button
          onClick={() => {
            router.push(PATH.EXPLORE);
            close();
          }}
        >
          떠나기
        </Popup.Button>
        <Popup.Button className={styles.continueButton} onClick={close}>
          남기
        </Popup.Button>
      </Popup.Actions>
    </Popup>
  );
};

export default PopupCancelCreation;
