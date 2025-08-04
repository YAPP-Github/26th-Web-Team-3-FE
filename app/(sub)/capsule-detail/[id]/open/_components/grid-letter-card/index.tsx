import { useQuery } from "@tanstack/react-query";

import { fileQueryOptions } from "@/shared/api/queries/file";
import type { Letter } from "@/shared/types/api/letter";
import * as styles from "./grid-letter-card.css";

interface LetterCardProps {
  letter: Letter;
}

const GridLetterCard = ({ letter }: LetterCardProps) => {
  const { data: fileData } = useQuery({
    ...fileQueryOptions.presignedUrl(letter.files),
    enabled: !!letter.files,
  });

  const imageUrl = fileData?.presignedUrl;

  return (
    <button className={styles.card} type="button">
      {imageUrl && (
        <div className={styles.imageContainer}>
          <img src={imageUrl} alt="편지 이미지" />
        </div>
      )}
      <div className={styles.content}>
        <p className={styles.text}>{letter.content}</p>
        <div className={styles.author}>From {letter.from}</div>
      </div>
    </button>
  );
};

export default GridLetterCard;
