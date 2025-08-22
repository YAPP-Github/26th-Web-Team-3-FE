import type { Letter } from "@/shared/types/api/letter";
import Image from "next/image";
import { useOverlay } from "@/shared/hooks/use-overlay";
import LetterDetailModal from "../letter-detail-modal";
import * as styles from "./stack-letter-card.css";

interface LetterCardProps {
  letter: Letter;
  imageUrl?: string | null;
  disabled?: boolean;
}

const StackLetterCard = ({ letter, imageUrl, disabled = false }: LetterCardProps) => {
  const { open } = useOverlay();

  const handleClick = () => {
    if (disabled) return;
    
    open(({ isOpen, close }) => (
      <LetterDetailModal
        letter={letter}
        imageUrl={imageUrl}
        isOpen={isOpen}
        onClose={close}
      />
    ));
  };

  return (
    <section className={styles.card} onClick={handleClick} role="button">
      <div className={styles.contentWrapper}>
        {imageUrl && (
          <Image
            width={240}
            height={240}
            className={styles.image}
            src={imageUrl}
            alt="편지 이미지"
          />
        )}
        <p
          className={
            imageUrl ? styles.contentWithImage : styles.contentWithoutImage
          }
        >
          {letter.content}
        </p>
      </div>

      {letter.from && (
        <p>
          <span className={styles.author}>From</span>
          {letter.from}
        </p>
      )}
    </section>
  );
};

export default StackLetterCard;
