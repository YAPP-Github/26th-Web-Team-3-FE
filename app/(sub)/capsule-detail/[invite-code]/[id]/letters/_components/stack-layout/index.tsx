"use client";

import Left from "@/shared/assets/icon/left.svg";
import Right from "@/shared/assets/icon/right.svg";
import type { Letter } from "@/shared/types/api/letter";
import { motion } from "motion/react";
import { useState } from "react";
import StackLetterCard from "../stack-letter-card";
import * as styles from "./stack-layout.css";

interface StackLayoutProps {
  letters: Letter[];
  onLetterClick?: (letter: Letter) => void;
}

const StackLayout = ({ letters, onLetterClick }: StackLayoutProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1: 다음, -1: 이전

  const nextLetter = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % letters.length);
  };

  const prevLetter = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + letters.length) % letters.length);
  };

  // 보여줄 카드들 (현재 + 다음 2-3개)
  const getVisibleCards = () => {
    const visibleCards = [];
    for (let i = 0; i < Math.min(4, letters.length); i++) {
      const letterIndex = (currentIndex + i) % letters.length;
      visibleCards.push({
        letter: letters[letterIndex],
        stackIndex: i,
      });
    }
    return visibleCards;
  };

  const visibleCards = getVisibleCards();

  return (
    <div className={styles.container}>
      {/* 이전 버튼 */}
      <button
        className={styles.navButton}
        onClick={prevLetter}
        disabled={letters.length <= 1}
      >
        <Left size={24} />
      </button>

      {/* 스택 카드 영역 */}
      <div className={styles.stackContainer}>
        {visibleCards.map(({ letter, stackIndex }) => (
          <motion.div
            key={`${letter.letterId}-${currentIndex}`}
            className={styles.cardWrapper}
            initial={
              direction === 1
                ? // 오른쪽 버튼: 새 카드가 뒤에서 앞으로
                  {
                    x: 60 + stackIndex * 15,
                    y: stackIndex * 12,
                    scale: 0.8 - stackIndex * 0.1,
                    rotate: (stackIndex + 1) * 3,
                    opacity: 0.4,
                    zIndex: 10 - stackIndex - 1,
                  }
                : direction === -1
                  ? // 왼쪽 버튼: 카드가 앞에서 뒤로
                    {
                      x: -100,
                      y: 0,
                      scale: 1.1,
                      rotate: -5,
                      opacity: 1,
                      zIndex: 15,
                    }
                  : // 초기 상태
                    {
                      x: stackIndex === 0 ? 0 : 40 + stackIndex * 15,
                      y: stackIndex * 12,
                      scale: 1 - stackIndex * 0.1,
                      rotate: stackIndex * 3,
                      opacity: stackIndex === 0 ? 1 : 0.7 - stackIndex * 0.2,
                      zIndex: 10 - stackIndex,
                    }
            }
            animate={{
              x: stackIndex === 0 ? 0 : 40 + stackIndex * 15,
              y: stackIndex * 12,
              scale: 1 - stackIndex * 0.1,
              rotate: stackIndex * 3,
              opacity:
                stackIndex === 0 ? 1 : Math.max(0.3, 0.7 - stackIndex * 0.2),
              zIndex: 10 - stackIndex,
            }}
            exit={
              direction === 1
                ? // 오른쪽 버튼: 앞 카드가 앞으로 나가면서 사라짐
                  {
                    x: -150,
                    y: -20,
                    scale: 1.2,
                    rotate: -8,
                    opacity: 0,
                    zIndex: 15,
                  }
                : // 왼쪽 버튼: 카드가 뒤로 들어감
                  {
                    x: 80,
                    y: 50,
                    scale: 0.6,
                    rotate: 10,
                    opacity: 0,
                    zIndex: 0,
                  }
            }
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 25,
              bounce: 0.1,
              duration: 0.6,
            }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
            }}
          >
            <StackLetterCard
              letter={letter}
              onClick={() => stackIndex === 0 && onLetterClick?.(letter)}
            />
          </motion.div>
        ))}
      </div>

      {/* 다음 버튼 */}
      <button
        className={styles.navButton}
        onClick={nextLetter}
        disabled={letters.length <= 1}
      >
        <Right size={24} />
      </button>

      {/* 페이지네이션 */}
      <div className={styles.pagination}>
        <span>
          {currentIndex + 1} / {letters.length}
        </span>
      </div>

      {/* 점 인디케이터 */}
      <div className={styles.dots}>
        {letters.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default StackLayout;
