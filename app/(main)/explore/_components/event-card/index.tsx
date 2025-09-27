import HoverMotion from "@/shared/ui/motion/hover-motion";
import { cn } from "@/shared/utils/cn";
import * as styles from "./event-card.css";

const eventLink = "https://www.instagram.com/p/DNpm2HGp8Ow/?img_index=1";

const EventCard = () => {
  const handleClick = () => {
    window.open(eventLink, "_blank");
  };

  return (
    <HoverMotion>
      <div className={styles.cardBase} onClick={handleClick}>
        <div className={cn(styles.cardGradientOverlay)} />
        <div className={styles.cardContentWrapper}>
          <div className={styles.cardTopWrapper}>OPEN EVENT</div>
          <span className={styles.cardTitle}>
            타임캡슐 만들고
            <br />
            치킨 받아가요!
          </span>
          <div className={styles.cardDescription}>
            <span>9/30까지</span>
          </div>
        </div>
        <div className={styles.cardIconWrapper}>
          <div className={styles.cardIcon}>
            <img src="/event-chicken.png" alt="이벤트 치킨" />
          </div>
        </div>
      </div>
    </HoverMotion>
  );
};

export default EventCard;
