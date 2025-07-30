import ShakeYMotion from "@/shared/ui/motion/shakeY-motion";
import * as styles from "./home-caption-section.css";

const HomeCaptionSection = () => {
  return (
    <ShakeYMotion>
      <p className={styles.caption}>7명이 이야기를 주고 받는 중</p>
    </ShakeYMotion>
  );
};

export default HomeCaptionSection;
