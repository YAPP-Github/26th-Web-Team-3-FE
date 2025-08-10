import * as styles from "./card.css";

import Thumbnail_1 from "@/shared/assets/2D-illust/thumbnail_1.svg";
import Thumbnail_2 from "@/shared/assets/2D-illust/thumbnail_2.svg";
import Thumbnail_3 from "@/shared/assets/2D-illust/thumbnail_3.svg";
import Thumbnail_4 from "@/shared/assets/2D-illust/thumbnail_4.svg";
import Thumbnail_5 from "@/shared/assets/2D-illust/thumbnail_5.svg";
import Thumbnail_6 from "@/shared/assets/2D-illust/thumbnail_6.svg";

import { cn } from "@/shared/utils/cn";
import type { ComponentProps } from "react";
import Chip from "../chip";
import HoverMotion from "../motion/hover-motion";

const gradientIcons = {
  gradient1: <Thumbnail_1 />,
  gradient2: <Thumbnail_2 />,
  gradient3: <Thumbnail_3 />,
  gradient4: <Thumbnail_4 />,
  gradient5: <Thumbnail_5 />,
  gradient6: <Thumbnail_6 />,
} as const;

interface CardProps extends ComponentProps<"div"> {
  openStatusLabel: string;
  title: string;
  peopleCount: number;
  count: number;
  variant: keyof typeof styles.cardVariants;
  onClick?: () => void;
}

const Card = ({ openStatusLabel, title, peopleCount, count, variant, className, onClick }: CardProps) => {
  const icon = gradientIcons[variant];

  return (
    <HoverMotion>
      <div className={cn(styles.cardBase, className)} onClick={onClick}>
        <div className={cn(styles.cardGradientOverlay, styles.cardVariants[variant])} />
        <div className={styles.cardContentWrapper}>
          {openStatusLabel === "오픈 완료" ? (
            <Chip className={styles.chipClass} variant="purple">
              {openStatusLabel}
            </Chip>
          ) : (
            <Chip className={styles.chipClass} variant="gray">
              {openStatusLabel}
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
    </HoverMotion>
  );
};

export default Card;
