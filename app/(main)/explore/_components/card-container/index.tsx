import Card from "@/shared/ui/card";

import * as styles from "./card-container.css";

import { capsuleQueryOptions } from "@/shared/api/queries/capsule";
import { CARD_GRADIENTS } from "@/shared/constants/card";
import { PATH } from "@/shared/constants/path";
import type { CapsuleSortType } from "@/shared/types/api/capsule";
import LoadingSpinner from "@/shared/ui/loading-spinner";
import { cardStatusLabel } from "@/shared/utils/capsule-card";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
interface CardContainerProps {
  selectedTab: string;
  selectedSort: CapsuleSortType;
}

const CardContainer = ({ selectedTab, selectedSort }: CardContainerProps) => {
  const { data: capsuleLists, isPending } = useQuery(
    capsuleQueryOptions.capsuleLists(0, 20, selectedSort, selectedTab),
  );

  const router = useRouter();

  if (isPending) return <LoadingSpinner loading={isPending} size={20} />;

  return (
    <div className={styles.cardContainer}>
      {capsuleLists?.result.timeCapsules.map((capsule, index) => (
        <Card
          key={capsule.id}
          openStatusLabel={cardStatusLabel(capsule.remainingStatus)}
          title={capsule.title}
          peopleCount={capsule.participantCount}
          count={capsule.letterCount}
          variant={CARD_GRADIENTS[index % 6]}
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
