import type { Letter } from "@/shared/types/api/letter";
import Image from "next/image";
import * as styles from "./stack-letter-card.css";

interface LetterCardProps {
  letter: Letter;
  imageUrl?: string | null;
  onClick?: () => void;
}

const StackLetterCard = ({ letter, imageUrl, onClick }: LetterCardProps) => {
  return (
    <section className={styles.card} onClick={onClick}>
      <div className={styles.contentWrapper}>
        {imageUrl && <Image width={240} height={240} className={styles.image} src={imageUrl} alt="편지 이미지" />}
        <p className={imageUrl ? styles.contentWithImage : styles.contentWithoutImage}>{letter.content}</p>
      </div>

      {letter.from && (
        <p>
          <span className={styles.author}>From</span> {letter.from}
        </p>
      )}
    </section>
  );
};

export default StackLetterCard;
