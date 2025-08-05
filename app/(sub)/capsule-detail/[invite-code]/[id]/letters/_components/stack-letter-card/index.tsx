import { useQuery } from "@tanstack/react-query";

import { fileQueryOptions } from "@/shared/api/queries/file";
import type { Letter } from "@/shared/types/api/letter";
import Image from "next/image";
import * as styles from "./stack-letter-card.css";

interface LetterCardProps {
  letter: Letter;
  onClick: () => void;
}

const StackLetterCard = ({ letter, onClick: handleClick }: LetterCardProps) => {
  const { data: fileData } = useQuery({
    ...fileQueryOptions.presignedUrl(letter.files),
    enabled: !!letter.files,
  });

  const imageUrl = fileData?.presignedUrl;

  return (
    <div className={styles.card} onClick={handleClick}>
      {imageUrl && (
        <Image
          width="24"
          height="24"
          className={styles.imageContainer}
          src={imageUrl}
          alt="편지 이미지"
        />
      )}
      <div className={styles.content}>
        <p className={styles.text}>{letter.content}</p>
        <div className={styles.author}>From {letter.from}</div>
      </div>
    </div>
  );
};

export default StackLetterCard;
