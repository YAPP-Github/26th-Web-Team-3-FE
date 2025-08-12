"use client";

import { capsuleQueryOptions } from "@/shared/api/queries/capsule";
import { CARD_GRADIENTS } from "@/shared/constants/card";
import { PATH } from "@/shared/constants/path";
import type {
  CapsuleSortType,
  MyCapsuleFilterType,
} from "@/shared/types/api/capsule";
import Card from "@/shared/ui/card";
import { cardStatusLabel } from "@/shared/utils/capsule-card";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import EmptySection from "../empty-section";
import * as styles from "./card-container.css";

interface CardContainerProps {
  selectedTab: MyCapsuleFilterType;
  selectedSort: CapsuleSortType;
}

const CardContainer = ({ selectedTab, selectedSort }: CardContainerProps) => {
  const router = useRouter();
  const { data: capsuleLists } = useQuery(
    capsuleQueryOptions.myCapsuleList(0, 20, selectedSort, selectedTab),
  );

  return capsuleLists?.result.timeCapsules.length === 0 ? (
    <EmptySection />
  ) : (
    <div className={styles.cardContainer}>
      {capsuleLists?.result.timeCapsules.map((capsule, index) => (
        <Card
          privacy={capsule.accessType}
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
