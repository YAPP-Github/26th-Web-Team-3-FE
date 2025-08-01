import Card from "@/shared/ui/card";
import * as styles from "./card-container.css";

import { capsuleQueryOptions } from "@/shared/api/queries/capsule";
import { PATH } from "@/shared/constants/path";
import { cardStatusLabel } from "@/shared/utils/capsule-card";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const variants = [
  "gradient1",
  "gradient2",
  "gradient3",
  "gradient4",
  "gradient5",
  "gradient6",
] as const;

const CardContainer = () => {
  const { data: popularCapsules } = useQuery(
    capsuleQueryOptions.popularCapsules(),
  );

  const router = useRouter();

  return (
    <div className={styles.cardContainer}>
      {popularCapsules?.result.map((capsule, index) => (
        <Card
          key={capsule.id}
          openStatusLabel={cardStatusLabel(capsule.remainingStatus)}
          title={capsule.title}
          peopleCount={capsule.participantCount}
          count={capsule.letterCount}
          variant={variants[index % 6]}
          onClick={() => {
            router.push(
              PATH.CAPSULE_DETAIL.replace(":id", capsule.id.toString()),
            );
          }}
        />
      ))}
    </div>
  );
};

export default CardContainer;
