import { capsuleData } from "@/shared/mock/capsule";
import Card from "@/shared/ui/card";
import * as styles from "./card-container.css";

const variants = [
  "gradient1",
  "gradient2",
  "gradient3",
  "gradient4",
  "gradient5",
  "gradient6",
] as const;

const CardContainer = () => {
  return (
    <div className={styles.cardContainer}>
      {capsuleData.map((capsule, index) => (
        <Card
          key={capsule.id}
          dDay={capsule.remainingTime.days}
          title={capsule.title}
          peopleCount={capsule.participantCount}
          count={capsule.letterCount}
          variant={variants[index % 6]}
        />
      ))}
    </div>
  );
};

export default CardContainer;
