import { useOverlay } from "@/shared/hooks/use-overlay";
import type { Letter } from "@/shared/types/api/letter";
import HoverMotion from "@/shared/ui/motion/hover-motion";
import Image from "next/image";
import LetterDetailModal from "../letter-detail-modal";
import * as styles from "./grid-letter-card.css";

interface LetterCardProps {
  letter: Letter;
  imageUrl?: string | null;
}

const GridLetterCard = ({ letter, imageUrl }: LetterCardProps) => {
  const { open } = useOverlay();

  const handleClick = () => {
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
    <HoverMotion>
      <section className={styles.card} onClick={handleClick} role="button">
        {imageUrl && (
          <Image
            width={200}
            height={200}
            className={styles.image}
            src={imageUrl}
            alt="편지 이미지"
            data-loaded="false"
            onLoad={(event) => {
              event.currentTarget.setAttribute("data-loaded", "true");
            }}
          />
        )}
        <div className={styles.content}>
          {!imageUrl && <p>{letter.content}</p>}
        </div>

        {letter.from && (
          <p>
            <span className={styles.author}>From</span>
            {letter.from}
          </p>
        )}
      </section>
    </HoverMotion>
  );
};

export default GridLetterCard;
