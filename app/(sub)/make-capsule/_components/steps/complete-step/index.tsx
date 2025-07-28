import LettieImage from "@/shared/assets/character/lettie_animate.png";
import Button from "@/shared/ui/button";
import RevealSectionMotion from "@/shared/ui/motion/reveal-section-motion";
import Image from "next/image";

import * as styles from "./complete-step.css";

const CompleteStep = () => {
  return (
    <div className={styles.container}>
      <RevealSectionMotion delay={0.1}>
        <h1 className={styles.titleCaption}>
          타임캡슐이
          <br />
          만들어졌어요!
        </h1>
      </RevealSectionMotion>

      <Image src={LettieImage} alt="lettie" className={styles.lettieImage} />
      <div className={styles.buttonWrapper}>
        <RevealSectionMotion delay={0.8}>
          <Button variant="primary" text="만든 캡슐 보러가기" />
        </RevealSectionMotion>
      </div>
    </div>
  );
};

export default CompleteStep;
