import EmptySection from "@/app/(main)/explore/_components/empty-section";
import Card from "@/shared/ui/card";

import * as styles from "./card-container.css";

import { CARD_GRADIENTS } from "@/shared/constants/card";
import { PATH } from "@/shared/constants/path";
import type { TimeCapsules } from "@/shared/types/api/capsule";
import LoadingSpinner from "@/shared/ui/loading-spinner";
import { cardStatusLabel } from "@/shared/utils/capsule-card";
import { useRouter } from "next/navigation";

interface CardContainerProps {
  capsules: TimeCapsules[];
  isLoading: boolean;
  keyword: string;
}

const CardContainer = ({
  capsules,
  isLoading,
  keyword,
}: CardContainerProps) => {
  const router = useRouter();

  if (keyword.trim().length === 0) return <div></div>;

  if (isLoading) return <LoadingSpinner loading={isLoading} size={20} />;

  if (capsules.length === 0) return <EmptySection />;

  return (
    <div className={styles.cardContainer}>
      {capsules.map((capsule, index) => (
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
