"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const HoverMotion = ({ children }: Props) => (
  <motion.div
    whileHover={{
      opacity: 0.6,
      y: -15,
    }}
    transition={{
      type: "spring",
      duration: 0.45,
      bounce: 0.25,
      delay: 0,
    }}
  >
    {children}
  </motion.div>
);

export default HoverMotion;
