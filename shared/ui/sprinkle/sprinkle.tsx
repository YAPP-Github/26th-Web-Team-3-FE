"use client";

import { motion } from "motion/react";
import * as styles from "./sprinkle.css";

const density = 29;
const baseSpeed = 1.5;
const speedVariance = 1.4;

const Sprinkle = () => {
  return (
    <div className={styles.sprinkleContainer}>
      {Array.from({ length: density }).map((_, i) => {
        const speed = baseSpeed * speedVariance;

        return (
          <motion.div
            key={i}
            className={styles.sprinkleDot}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: speed,
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

export default Sprinkle;
