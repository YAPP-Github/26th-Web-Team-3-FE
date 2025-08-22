import ShakeYMotion from "@/shared/ui/motion/shakeY-motion";
import * as styles from "./home-caption-section.css";

interface HomeCaptionSectionProps {
  totalUserCount: number;
}

const HomeCaptionSection = ({ totalUserCount }: HomeCaptionSectionProps) => {
  return (
    <ShakeYMotion>
      <p className={styles.caption}>
        {totalUserCount}명이 이야기를 주고 받는 중
      </p>
    </ShakeYMotion>
  );
};

export default HomeCaptionSection;
