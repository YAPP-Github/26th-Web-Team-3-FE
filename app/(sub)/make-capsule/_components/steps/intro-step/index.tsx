"use client";

import TitleCaption from "@/app/(sub)/make-capsule/_components/title-caption";
import Lettie from "@/shared/assets/character/lettie_animate.png";
import Button from "@/shared/ui/button";
import RevealSectionMotion from "@/shared/ui/motion/reveal-section-motion";
import Image from "next/image";

import * as styles from "./intro-step.css";

const IntroStep = () => {
  return (
    <main className={styles.container}>
      <RevealSectionMotion>
        <TitleCaption />
      </RevealSectionMotion>
      <Image
        className={styles.lettieImage}
        src={Lettie}
        alt="lettie-animate-image"
        width={340}
        height={340}
      />
      <RevealSectionMotion delay={0.8}>
        <input
          type="text"
          placeholder="타임캡슐 이름"
          className={styles.titleInput}
        />
        <input
          type="text"
          placeholder="내 타임캡슐을 소개해보세요."
          className={styles.descriptionInput}
        />
      </RevealSectionMotion>
      <RevealSectionMotion delay={1.2}>
        <div className={styles.buttonContainer}>
          <Button variant="primary" text="다음" />
        </div>
      </RevealSectionMotion>
    </main>
  );
};

export default IntroStep;
