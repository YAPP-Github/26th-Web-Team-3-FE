"use client";
import TitleCaption from "@/app/(sub)/create-capsule/_components/title-caption";
import Lettie from "@/shared/assets/character/lettie_animate.png";
import Button from "@/shared/ui/button";
import RevealMotion from "@/shared/ui/motion/reveal-motion";
import Image from "next/image";
import { useFormContext } from "react-hook-form";
import CapsuleOpenAtInput from "./capsule-open-at-input";
import LetterCloseAtInput from "./letter-close-at-input";

import * as styles from "./date-step.css";
interface Props {
  handleNextStep: (step: string) => void;
}

const DateStep = ({ handleNextStep }: Props) => {
  const { getValues } = useFormContext();
  const handleNextClick = () => {
    const openDate = getValues("openDate") as string;
    const closedAt = getValues("closedAt") as string;
    if (!openDate || !closedAt) {
      alert("날짜를 입력해주세요.");
      return;
    }
    if (closedAt >= openDate) {
      alert("편지 작성 마감일은 타임캡슐 오픈일 이전이어야 합니다.");
      return;
    }
    handleNextStep("privacy");
  };

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
        unoptimized
      />
      <div className={styles.inputSectionWrapper}>
        <RevealMotion delay={0.8}>
          <CapsuleOpenAtInput />
          <LetterCloseAtInput />
        </RevealMotion>
      </div>
      <div className={styles.buttonContainer}>
        <RevealMotion delay={1.2}>
          <Button variant="primary" text="다음" onClick={handleNextClick} />
        </RevealMotion>
      </div>
    </div>
  );
};

export default DateStep;
