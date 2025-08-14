"use client";

import TitleCaption from "@/app/(sub)/create-capsule/_components/title-caption";
import Lettie from "@/shared/assets/character/lettie_animate.png";
import Button from "@/shared/ui/button";
import RevealMotion from "@/shared/ui/motion/reveal-motion";
import Image from "next/image";
import { useFormContext } from "react-hook-form";

import * as styles from "./intro-step.css";

interface Props {
  handleNextStep: (step: string) => void;
}

const IntroStep = ({ handleNextStep }: Props) => {
  const { register, getValues } = useFormContext();

  const handleClickNext = () => {
    const title = getValues("title");
    if (!title?.trim()) {
      alert("타임캡슐 이름을 입력해주세요.");
      return;
    }
    handleNextStep("date");
  };

  return (
    <main className={styles.container}>
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
        <input
          type="text"
          placeholder="타임캡슐 이름"
          className={styles.titleInput}
          {...register("title", { required: "타임캡슐 이름을 입력해주세요" })}
        />

        <input
          type="text"
          placeholder="내 타임캡슐을 소개해보세요."
          className={styles.descriptionInput}
          {...register("subtitle")}
        />
      </RevealMotion>
      <RevealMotion delay={1.2}>
        <div className={styles.buttonContainer}>
          <Button variant="primary" text="다음" onClick={handleClickNext} />
        </div>
      </RevealMotion>
    </main>
  );
};

export default IntroStep;
