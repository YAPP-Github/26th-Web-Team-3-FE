"use client";

import TitleCaption from "@/app/(sub)/create-capsule/_components/title-caption";
import Lettie from "@/shared/assets/character/lettie_animate.png";
import Button from "@/shared/ui/button";
import RevealMotion from "@/shared/ui/motion/reveal-motion";
import Image from "next/image";
import CapsuleOpenAtInput from "./capsule-open-at-input";
import * as styles from "./date-step.css";
import LetterCloseAtInput from "./letter-close-at-input";
interface Props {
  handleNextStep: (step: string) => void;
}

const DateStep = ({ handleNextStep }: Props) => {
  return (
    <div className={styles.container}>
      <RevealMotion>
        <TitleCaption
          title={
            <span>
              언제 열고,
              <br />
              언제까지 받을까요?
            </span>
          }
        />
      </RevealMotion>
      <Image
        className={styles.lettieImage}
        src={Lettie}
        alt="lettie-animate-image"
        width={340}
        height={340}
      />
      <RevealMotion delay={0.8}>
        <div className={styles.inputSectionWrapper}>
          <CapsuleOpenAtInput />
          <LetterCloseAtInput />
        </div>
      </RevealMotion>

      <div className={styles.buttonContainer}>
        <RevealMotion delay={1.2}>
          <Button
            variant="primary"
            text="다음"
            onClick={() => handleNextStep("private")}
          />
        </RevealMotion>
      </div>
    </div>
  );
};

export default DateStep;
