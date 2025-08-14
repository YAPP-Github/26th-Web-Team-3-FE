import type { ImageUrl, Letter } from "@/shared/types/api/letter";
import GridLetterCard from "../grid-letter-card";
import * as styles from "./grid-layout.css";

interface GridLayoutProps {
  letters: Letter[];
  imageUrls: ImageUrl[];
}

const GridLayout = ({ letters, imageUrls }: GridLayoutProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {letters.map((letter) => {
          const imageUrl = imageUrls.find(
            (img) => img.letterId === letter.letterId,
          )?.url;
          return (
            <GridLetterCard
              key={letter.letterId}
              letter={letter}
              imageUrl={imageUrl}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GridLayout;
