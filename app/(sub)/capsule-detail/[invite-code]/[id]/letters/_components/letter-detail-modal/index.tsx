import Modal from "@/app/(sub)/capsule-detail/_components/modal";
import { Letter } from "@/shared/types/api/letter";
import Image from "next/image";
import * as styles from "./letter-detail-modal.css";

interface LetterDetailModalProps {
  letter: Letter;
  imageUrl?: string | null;
  isOpen: boolean;
  onClose: () => void;
}

const LetterDetailModal = ({
  letter,
  imageUrl,
  isOpen,
  onClose,
}: LetterDetailModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      overlayClassName={styles.modalOverlay}
      contentClassName={styles.modalContent}
      fullScreenOnMobile={false}
    >
      <section className={styles.container}>
        {imageUrl && (
          <Image
            src={imageUrl}
            alt="편지 이미지"
            width={300}
            height={300}
            className={styles.image}
          />
        )}
        <div className={styles.contentWrapper}>
          <p className={styles.content}>{letter.content}</p>
          {letter.from && (
            <p className={styles.from}>
              <span className={styles.author}>From</span>
              {letter.from}
            </p>
          )}
        </div>
      </section>
    </Modal>
  );
};

export default LetterDetailModal;
