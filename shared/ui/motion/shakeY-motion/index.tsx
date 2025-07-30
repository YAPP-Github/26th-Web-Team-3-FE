"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ShakeYMotion = ({ children }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 0.6, y: -3 }}
      transition={{
        duration: 0.8,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
        repeatType: "mirror",
      }}
    >
      {children}
    </motion.div>
  );
};

export default ShakeYMotion;
