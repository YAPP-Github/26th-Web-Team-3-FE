"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import * as styles from "./floating-stars-container.css";

interface FloatingStarsProps {
  size: number;
  color: string;
  speed: number;
  count: number;
  swayAmount: number;
  speedRandomness: number;
  sizeRandomness: number;
  swayRandomness: number;
}

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export default function FloatingStarsContainer(props: FloatingStarsProps) {
  const {
    size,
    color,
    speed,
    count,
    swayAmount,
    speedRandomness,
    sizeRandomness,
    swayRandomness,
  } = props;

  const [stars, setStars] = useState<any[]>([]);

  const generateStar = (index: number) => {
    const seed = index * 12345;
    return {
      id: `star-${index}`,
      left: `${seededRandom(seed) * 100}%`,
      speed: speed * (1 + (seededRandom(seed + 1) - 0.5) * 2 * speedRandomness),
      size: size * (1 + (seededRandom(seed + 2) - 0.5) * 2 * sizeRandomness),
      sway:
        swayAmount * (1 + (seededRandom(seed + 3) - 0.5) * 2 * swayRandomness),
      startPosition: seededRandom(seed + 4) * 100,
      swayOffset: seededRandom(seed + 5) * Math.PI * 2,
    };
  };

  // 반드시 client에 마운트 된 후에만 생성
  useEffect(() => {
    const generatedStars = Array.from({ length: count }, (_, i) => generateStar(i));
    setStars(generatedStars);
  }, [count, size, speed, speedRandomness, sizeRandomness, swayAmount, swayRandomness]);

  // 별들이 생성되기 전에는 아무것도 렌더링하지 않음
  if (stars.length === 0) {
    return null;
  }

  return (
    <div className={styles.container}>
      {stars.map((star) => (
        <motion.div
          key={star.id}
          style={{
            width: star.size,
            height: star.size,
            borderRadius: "50%",
            backgroundColor: color,
            position: "absolute",
            left: star.left,
            bottom: `${-star.size}px`,
          }}
          animate={{
            bottom: ["0%", "100%"],
            x: [`-${star.sway}px`, `${star.sway}px`, `-${star.sway}px`],
          }}
          transition={{
            bottom: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 10 / star.speed,
              ease: "linear",
              delay: -((10 / star.speed) * (star.startPosition / 100)),
            },
            x: {
              repeat: Number.POSITIVE_INFINITY,
              duration:
                3 +
                seededRandom(Number.parseInt(star.id.split("-")[1]) + 100) * 2,
              ease: "easeInOut",
            },
          }}
        />
      ))}
    </div>
  );
}
