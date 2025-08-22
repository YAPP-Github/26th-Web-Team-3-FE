"use client";

import Left from "@/shared/assets/icon/left.svg";
import Right from "@/shared/assets/icon/right.svg";
import type { Letter } from "@/shared/types/api/letter";
import type {
  InfiniteQueryObserverResult,
} from "@tanstack/react-query";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import StackLetterCard from "../stack-letter-card";
import { createStackAnimations } from "./animations";
import * as styles from "./stack-layout.css";

export interface VisibleLetter {
  letter: Letter;
  stackIndex: number;
  letterIndex: number;
  isTop: boolean;
  key: number;
}

interface ImageUrl {
  letterId: number;
  fileId: string;
  url: string | null;
}

interface StackLayoutProps {
  letters: Letter[];
  letterCount: number;
  imageUrls: ImageUrl[];
  fetchNextPage: () => Promise<InfiniteQueryObserverResult<any, Error>>;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
}

const StackLayout = ({
  letters,
  letterCount,
  imageUrls,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
}: StackLayoutProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentIndexRef = useRef(0);
  const [direction, setDirection] = useState(0);
  const [visibleLetters, setVisibleLetters] = useState<VisibleLetter[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useLayoutEffect(() => {
    const maxCards = Math.min(3, letters.length - currentIndex);
    const newVisibleLetters: VisibleLetter[] = [];

    for (let i = 0; i < maxCards; i++) {
      const letterIndex = currentIndex + i;

      newVisibleLetters.push({
        letter: letters[letterIndex],
        stackIndex: i,
        letterIndex,
        isTop: i === 0,
        key: letterIndex,
      });
    }

    setVisibleLetters(newVisibleLetters);
  }, [currentIndex, letters]);

  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  useEffect(() => {
    if (!hasNextPage || isFetchingNextPage) return;

    const shouldLoadNext =
      currentIndexRef.current >= 8 && (currentIndexRef.current - 8) % 20 === 0;
    if (shouldLoadNext) {
      const timer = setTimeout(() => {
        fetchNextPage();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, hasNextPage, isFetchingNextPage, fetchNextPage]);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const nextLetter = () => {
    if (currentIndex < letters.length - 1 && !isAnimating) {
      setIsAnimating(true);
      setDirection(1);
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      currentIndexRef.current = nextIndex;

      timerRef.current = setTimeout(() => {
        setDirection(0);
        setIsAnimating(false);
        timerRef.current = null;
      }, 300);
    }
  };

  const prevLetter = () => {
    if (currentIndex > 0 && !isAnimating) {
      setIsAnimating(true);
      setDirection(-1);
      setCurrentIndex((prev) => prev - 1);

      timerRef.current = setTimeout(() => {
        setDirection(0);
        setIsAnimating(false);
        timerRef.current = null;
      }, 400);
    }
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.navButton}
        onClick={prevLetter}
        disabled={isAnimating}
        style={{ visibility: currentIndex > 0 ? "visible" : "hidden" }}
        type="button"
      >
        <Left width={24} height={24} />
      </button>

      <div className={styles.stackContainer}>
        <AnimatePresence mode="popLayout" initial={false}>
          {visibleLetters.map(({ letter, key }, index) => {
            const animationProps = createStackAnimations(
              direction,
              visibleLetters,
            )[index];
            const imageUrl = imageUrls.find(
              (img) => img.letterId === letter.letterId,
            )?.url;

            return (
              <motion.div
                key={key}
                className={styles.cardWrapper}
                {...animationProps}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
              >
                <StackLetterCard
                  letter={letter}
                  imageUrl={imageUrl}
                  disabled={isAnimating}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <button
        className={styles.navButton}
        onClick={nextLetter}
        disabled={isAnimating}
        style={{
          visibility: currentIndex < letters.length - 1 ? "visible" : "hidden",
        }}
        type="button"
      >
        <Right width={24} height={24} />
      </button>

      <div className={styles.pagination}>
        <span className={styles.paginationCurrent}>{currentIndex + 1}</span>
        <span className={styles.paginationTotal}> / {letterCount}</span>
      </div>
    </div>
  );
};

export default StackLayout;
