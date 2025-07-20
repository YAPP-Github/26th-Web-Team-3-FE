"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import * as styles from "./sprinkle-container.css";

/**
 * 스프링클 애니메이션 설정 상수
 */
const density = 29; // 렌더링할 스프링클 점의 개수
const baseSpeed = 1.5; // 기본 애니메이션 지속 시간 (초)
const speedVariance = 1.4; // 속도 변화를 위한 배수

/**
 * 랜덤 위치를 생성하는 함수
 * @param count 생성할 위치의 개수
 * @returns 랜덤한 top, left 위치 배열
 */
const generateRandomPositions = (count: number) => {
  return Array.from({ length: count }, () => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
  }));
};

/**
 * SprinkleContainer 컴포넌트
 *
 * 컨테이너 전체에 걸쳐 랜덤한 위치에서 페이드 인/아웃되는
 * 여러 개의 점으로 구성된 애니메이션 스프링클 효과를 생성합니다.
 *
 * @returns 애니메이션 스프링클 점들이 포함된 컨테이너
 *
 * @example
 * ```tsx
 * <SprinkleContainer />
 * ```
 */
const SprinkleContainer = () => {
  const [randomPositions, setRandomPositions] = useState<
    { top: string; left: string }[]
  >([]);

  // 반드시 client에 마운트 된 후에만 생성
  useEffect(() => {
    setRandomPositions(generateRandomPositions(density));
  }, []);

  // 랜덤 위치가 생성되기 전에는 아무것도 렌더링하지 않음
  if (randomPositions.length === 0) {
    return null;
  }

  return (
    <div className={styles.sprinkleContainer}>
      {randomPositions.map((pos, i) => {
        const speed = baseSpeed * speedVariance;
        const delay = (i / density) * speed;

        return (
          <motion.div
            key={i}
            className={styles.sprinkleDot}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: speed,
              delay: delay,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            style={{
              top: pos.top,
              left: pos.left,
            }}
          />
        );
      })}
    </div>
  );
};

export default SprinkleContainer;
