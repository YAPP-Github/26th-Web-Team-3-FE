//import Card from "@/shared/ui/card";
import * as styles from "./card-container.css";

//Todo: api 붙이면서 추후 마저 구현 예정!

// //const variants = [
//   "gradient1",
//   "gradient2",
//   "gradient3",
//   "gradient4",
//   "gradient5",
//   "gradient6",
// ] as const;

const CardContainer = () => {
  return (
    <div className={styles.cardContainer}>
      {/* {capsuleData.map((capsule, index) => (
        // <Card
        //   key={capsule.id}
        //   openStatusLabel={capsule.remainingTime.days}
        //   title={capsule.title}
        //   peopleCount={capsule.participantCount}
        //   count={capsule.letterCount}
        //   variant={variants[index % 6]}
        // />
      ))} */}
    </div>
  );
};

export default CardContainer;
