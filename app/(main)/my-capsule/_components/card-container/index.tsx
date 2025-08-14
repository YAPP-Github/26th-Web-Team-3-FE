"use client";
import { CARD_GRADIENTS } from "@/shared/constants/card";
import { PATH } from "@/shared/constants/path";
import type { TimeCapsules } from "@/shared/types/api/capsule";
import Card from "@/shared/ui/card";
import LoadingSpinner from "@/shared/ui/loading-spinner";
import { cardStatusLabel } from "@/shared/utils/capsule-card";
import { useRouter } from "next/navigation";
import EmptySection from "../empty-section";
import * as styles from "./card-container.css";

interface CardContainerProps {
  capsules: TimeCapsules[];
  isLoading: boolean;
}

const CardContainer = ({ capsules, isLoading }: CardContainerProps) => {
  const router = useRouter();

  if (isLoading) return <LoadingSpinner loading={isLoading} size={20} />;

  if (capsules.length === 0) return <EmptySection />;

  return (
    <div className={styles.cardContainer}>
      {capsules.map((capsule, index) => (
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
