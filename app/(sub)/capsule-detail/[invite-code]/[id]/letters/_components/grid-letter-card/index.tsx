import type { Letter } from "@/shared/types/api/letter";
import HoverMotion from "@/shared/ui/motion/hover-motion";
import Image from "next/image";
import * as styles from "./grid-letter-card.css";

interface LetterCardProps {
  letter: Letter;
  imageUrl?: string | null;
  onClick?: () => void;
}

const GridLetterCard = ({ letter, imageUrl, onClick }: LetterCardProps) => {
  return (
    <HoverMotion>
      <section className={styles.card} onClick={onClick}>
        {imageUrl && (
          <Image
            width={200}
            height={200}
            className={styles.image}
            src={imageUrl}
            alt="편지 이미지"
          />
        )}
        <div className={styles.content}>
          {!imageUrl && <p>{letter.content}</p>}
        </div>

        {letter.from && (
          <p>
            <span className={styles.author}>From</span> {letter.from}
          </p>
        )}
      </section>
    </HoverMotion>
  );
};

export default GridLetterCard;
