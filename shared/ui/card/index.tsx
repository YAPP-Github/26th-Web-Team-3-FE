import * as styles from "./card.css";

import Thumbnail_1 from "@/shared/assets/2D-illust/thumbnail_1.svg";
import Thumbnail_2 from "@/shared/assets/2D-illust/thumbnail_2.svg";
import Thumbnail_3 from "@/shared/assets/2D-illust/thumbnail_3.svg";
import Thumbnail_4 from "@/shared/assets/2D-illust/thumbnail_4.svg";
import Thumbnail_5 from "@/shared/assets/2D-illust/thumbnail_5.svg";
import Thumbnail_6 from "@/shared/assets/2D-illust/thumbnail_6.svg";

import { cn } from "@/shared/utils/cn";
import Chip from "../chip";

const gradientIcons = {
  gradient1: <Thumbnail_1 />,
  gradient2: <Thumbnail_2 />,
  gradient3: <Thumbnail_3 />,
  gradient4: <Thumbnail_4 />,
  gradient5: <Thumbnail_5 />,
  gradient6: <Thumbnail_6 />,
} as const;

interface CardProps {
  dDay: number;
  title: string;
  peopleCount: number;
  count: number;
  variant: keyof typeof styles.cardVariants;
}

const Card = ({ dDay, title, peopleCount, count, variant }: CardProps) => {
  const icon = gradientIcons[variant];

  return (
    <div className={cn(styles.cardBase, styles.cardVariants[variant])}>
      <div className={styles.cardContentWrapper}>
        {dDay === 0 ? (
          <Chip className={styles.chipClass} variant="purple">
            캡슐 오픈
          </Chip>
        ) : (
          <Chip className={styles.chipClass} variant="gray">
            D-{dDay}
          </Chip>
        )}
        <span className={styles.cardTitle}>{title}</span>
        <div className={styles.cardDescription}>
          <span>{peopleCount}명 참여</span>
          <span>·</span>
          <span>{count}통</span>
        </div>
      </div>
      <div className={styles.cardIconWrapper}>
        <div className={styles.cardIcon}>{icon}</div>
      </div>
    </div>
  );
};

export default Card;
