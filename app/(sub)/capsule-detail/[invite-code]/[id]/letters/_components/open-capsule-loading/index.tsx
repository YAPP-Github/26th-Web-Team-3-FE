import LettieImage from "@/shared/assets/character/lettie_animate.png";
import RevealMotion from "@/shared/ui/motion/reveal-motion";
import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import * as styles from "./open-capsule-loading.css";

interface OpenCapsuleLoadingProps {
  participantCount: number;
  letterCount: number;
  onComplete: () => void;
}

const AUTO_CLOSE_DELAY = 3000;

const OpenCapsuleLoading = ({ participantCount, letterCount, onComplete }: OpenCapsuleLoadingProps) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isCompletedRef = useRef(false);

  const handleComplete = useCallback(() => {
    if (isCompletedRef.current) return;

    isCompletedRef.current = true;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    onComplete();
  }, [onComplete]);

  useEffect(() => {
    timeoutRef.current = setTimeout(handleComplete, AUTO_CLOSE_DELAY);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [handleComplete]);

  return (
    <div className={styles.loadingContainer}>
      <RevealMotion delay={0.1}>
        <h1 className={styles.titleCaption}>
          드디어
          <br />
          캡슐이 열렸어요!
        </h1>
        <p className={styles.subtitle}>
          {participantCount}명 참여 · {letterCount}통
        </p>
      </RevealMotion>

      <Image src={LettieImage} alt="lettie" className={styles.lettieImage} />
    </div>
  );
};

export default OpenCapsuleLoading;
