import { capsuleQueryOptions } from "@/shared/api/queries/capsule";
import { PATH } from "@/shared/constants/path";
import type {
  CapsuleSortType,
  MyCapsuleFilterType,
} from "@/shared/types/api/capsule";
import Card from "@/shared/ui/card";
import { cardStatusLabel } from "@/shared/utils/capsule-card";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import * as styles from "./card-container.css";

const variants = [
  "gradient1",
  "gradient2",
  "gradient3",
  "gradient4",
  "gradient5",
  "gradient6",
] as const;

interface CardContainerProps {
  selectedTab: MyCapsuleFilterType;
  selectedSort: CapsuleSortType;
}

const CardContainer = ({ selectedTab, selectedSort }: CardContainerProps) => {
  const router = useRouter();
  const { data: capsuleLists } = useQuery(
    capsuleQueryOptions.myCapsuleList(0, 20, selectedSort, selectedTab),
  );
  return (
    <div className={styles.cardContainer}>
      {capsuleLists?.result.timeCapsules.map((capsule, index) => (
        <Card
          key={capsule.id}
          openStatusLabel={cardStatusLabel(capsule.remainingStatus)}
          title={capsule.title}
          peopleCount={capsule.participantCount}
          count={capsule.letterCount}
          variant={variants[index % 6]}
          onClick={() => {
            router.push(
              PATH.CAPSULE_DETAIL(capsule.inviteCode, capsule.id.toString()),
            );
          }}
        />
      ))}
    </div>
  );
};

export default CardContainer;
