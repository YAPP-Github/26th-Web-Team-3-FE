import LettieImage from "@/shared/assets/character/lettie_animate.png";
import RevealMotion from "@/shared/ui/motion/reveal-motion";
import { cn } from "@/shared/utils/cn";
import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import * as styles from "./open-capsule-loading.css";

interface OpenCapsuleLoadingProps {
  participantCount: number;
  letterCount: number;
  isLoading: boolean;
  onComplete: () => void;
}

const AUTO_CLOSE_DELAY = 3000;

const OpenCapsuleLoading = ({ participantCount, letterCount, isLoading, onComplete }: OpenCapsuleLoadingProps) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isCompletedRef = useRef(false);

  const handleComplete = useCallback(() => {
    if (isLoading || isCompletedRef.current) return;

    isCompletedRef.current = true;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    onComplete();
  }, [isLoading, onComplete]);

  useEffect(() => {
    if (!isLoading) {
      timeoutRef.current = setTimeout(handleComplete, AUTO_CLOSE_DELAY);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isLoading, handleComplete]);

  return (
    <div
      className={cn(styles.loadingContainer, isLoading ? styles.loadingContainerDisabled : undefined)}
      onClick={handleComplete}
    >
      <RevealMotion delay={0.1}>
        <h1 className={styles.titleCaption}>
          드디어
          <br />
          캡슐이 열렸어요!
        </h1>
        <p className={cn(styles.subtitle, isLoading ? styles.subtitleLoading : undefined)}>
          {participantCount}명 참여 · {letterCount}통
        </p>
      </RevealMotion>

      <Image src={LettieImage} alt="lettie" className={styles.lettieImage} />
    </div>
  );
};

export default OpenCapsuleLoading;
