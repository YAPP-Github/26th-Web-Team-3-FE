import type { ImageUrl, Letter } from "@/shared/types/api/letter";
import LoadingSpinner from "@/shared/ui/loading-spinner";
import GridLetterCard from "../grid-letter-card";
import * as styles from "./grid-layout.css";

interface GridLayoutProps {
  letters: Letter[];
  footerRef: (element: HTMLDivElement | null) => void;
  imageUrls: ImageUrl[];
  isFetchingNextPage: boolean;
}

const GridLayout = ({
  letters,
  footerRef,
  imageUrls,
  isFetchingNextPage,
}: GridLayoutProps) => {
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
      <div style={{ minHeight: "1px", textAlign: "center" }} ref={footerRef}>
        {isFetchingNextPage && (
          <div style={{ padding: "20px" }}>
            <LoadingSpinner loading={true} size={20} />
            <div style={{ marginTop: "8px" }}>Loading more...</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GridLayout;
