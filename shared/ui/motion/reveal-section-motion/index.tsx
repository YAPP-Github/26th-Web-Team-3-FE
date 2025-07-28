import { motion } from "motion/react";
import type { ReactNode } from "react";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

interface RevealSectionMotionProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  bounce?: number;
}

const RevealSectionMotion = ({
  children,
  delay = 0,
  duration = 1.5,
  bounce = 0.6,
}: RevealSectionMotionProps) => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={fadeUpVariants}
    transition={{
      type: "spring",
      duration,
      bounce,
      delay,
    }}
  >
    {children}
  </motion.div>
);

export default RevealSectionMotion;
