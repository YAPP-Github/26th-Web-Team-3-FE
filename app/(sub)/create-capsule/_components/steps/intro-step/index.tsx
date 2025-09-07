"use client";

import TitleCaption from "@/app/(sub)/create-capsule/_components/title-caption";
import Lettie from "@/shared/assets/character/lettie_animate.png";
import Button from "@/shared/ui/button";
import RevealMotion from "@/shared/ui/motion/reveal-motion";
import Image from "next/image";
import { useFormContext, useController } from "react-hook-form";

import * as styles from "./intro-step.css";

interface Props {
  handleNextStep: (step: string) => void;
}

const IntroStep = ({ handleNextStep }: Props) => {
  const { control} = useFormContext();
  
  const { field: titleField } = useController({
    name: "title",
    control,
  });

  const { field: subtitleField } = useController({
    name: "subtitle",
    control
  });

  const handleClickNext = () => {
    handleNextStep("date");
  };

  return (
    <div className={styles.container}>
      <RevealMotion>
        <TitleCaption
          title={
            <span>
              타임캡슐의 이름을
              <br />
              정해주세요.
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
      <RevealMotion delay={0.8}>
        <div className={styles.inputContainer}>
          <input
            type="text"
            placeholder="타임캡슐 이름"
            className={styles.titleInput}
            maxLength={15}
            {...titleField}
          />
          <span className={styles.charCountTitle}>{titleField.value?.length || 0}/15</span>
        </div>

        <div className={styles.inputContainer}>
          <textarea
            placeholder="내 타임캡슐을 소개해보세요."
            className={styles.descriptionInput}
            maxLength={80}
            {...subtitleField}
          />
          <span className={styles.charCountDescription}>{subtitleField.value?.length || 0}/80</span>
        </div>
      </RevealMotion>
      <RevealMotion delay={1.2}>
        <div className={styles.buttonContainer}>
          <Button variant="primary" text="다음" onClick={handleClickNext} disabled={!titleField.value?.trim()} />
        </div>
      </RevealMotion>
    </div>
  );
};

export default IntroStep;
