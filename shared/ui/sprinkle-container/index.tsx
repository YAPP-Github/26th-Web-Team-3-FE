"use client";

import { motion } from "motion/react";
import * as styles from "./sprinkle-container.css";

/**
 * 스프링클 애니메이션 설정 상수
 */
const density = 29; // 렌더링할 스프링클 점의 개수
const baseSpeed = 1.5; // 기본 애니메이션 지속 시간 (초)
const speedVariance = 1.4; // 속도 변화를 위한 배수

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
  return (
    <div className={styles.sprinkleContainer}>
      {Array.from({ length: density }).map((_, i) => {
        const speed = baseSpeed * speedVariance;
        const delay = Math.random() * speed;

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
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        );
      })}
    </div>
  );
};

export default SprinkleContainer;
