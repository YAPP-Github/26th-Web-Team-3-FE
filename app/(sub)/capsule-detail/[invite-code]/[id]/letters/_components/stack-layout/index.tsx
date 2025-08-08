"use client";

import Left from "@/shared/assets/icon/left.svg";
import Right from "@/shared/assets/icon/right.svg";
import type { Letter } from "@/shared/types/api/letter";
import { AnimatePresence, motion } from "motion/react";
import { useLayoutEffect, useState } from "react";
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
  imageUrls: ImageUrl[];
}

const StackLayout = ({ letters, imageUrls }: StackLayoutProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [visibleLetters, setVisibleLetters] = useState<VisibleLetter[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);

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

  const nextLetter = () => {
    if (currentIndex < letters.length - 1 && !isAnimating) {
      setIsAnimating(true);
      setDirection(1);
      setCurrentIndex((prev) => prev + 1);

      setTimeout(() => {
        setDirection(0);
        setIsAnimating(false);
      }, 300);
    }
  };

  const prevLetter = () => {
    if (currentIndex > 0 && !isAnimating) {
      setIsAnimating(true);
      setDirection(-1);
      setCurrentIndex((prev) => prev - 1);

      setTimeout(() => {
        setDirection(0);
        setIsAnimating(false);
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
        <Left size={24} />
      </button>

      <div className={styles.stackContainer}>
        <AnimatePresence mode="popLayout">
          {visibleLetters.map(({ letter, key }, index) => {
            const animationProps = createStackAnimations(direction, visibleLetters)[index];
            const imageUrl = imageUrls.find((img) => img.letterId === letter.letterId)?.url;

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
                <StackLetterCard letter={letter} imageUrl={imageUrl} />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <button
        className={styles.navButton}
        onClick={nextLetter}
        disabled={isAnimating}
        style={{ visibility: currentIndex < letters.length - 1 ? "visible" : "hidden" }}
        type="button"
      >
        <Right size={24} />
      </button>

      <div className={styles.pagination}>
        <span className={styles.paginationCurrent}>{currentIndex + 1}</span>
        <span className={styles.paginationTotal}> / {letters.length}</span>
      </div>
    </div>
  );
};

export default StackLayout;
