"use client";

import TitleCaption from "@/app/(sub)/create-capsule/_components/title-caption";
import Lettie from "@/shared/assets/character/lettie_animate.png";
import { useFunnelData } from "@/shared/hooks/use-funnel";
import Button from "@/shared/ui/button";
import RevealMotion from "@/shared/ui/motion/reveal-motion";
import Image from "next/image";

import * as styles from "./intro-step.css";

interface Props {
  handleNextStep: (step: string) => void;
}

const IntroStep = ({ handleNextStep }: Props) => {
  const { data, setData } = useFunnelData();

  const title = data.title || "";
  const subtitle = data.subtitle || "";

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ title: e.target.value });
  };

  const handleSubtitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ subtitle: e.target.value });
  };

  const handleSubmit = () => {
    if (!title.trim()) {
      alert("캡슐 이름을 입력해주세요.");
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
      />
      <RevealMotion delay={0.8}>
        <input
          type="text"
          placeholder="타임캡슐 이름"
          className={styles.titleInput}
          value={title}
          onChange={handleTitleChange}
        />
        <input
          type="text"
          placeholder="내 타임캡슐을 소개해보세요."
          className={styles.descriptionInput}
          value={subtitle}
          onChange={handleSubtitleChange}
        />
      </RevealMotion>
      <RevealMotion delay={1.2}>
        <div className={styles.buttonContainer}>
          <Button variant="primary" text="다음" onClick={handleSubmit} />
        </div>
      </RevealMotion>
    </main>
  );
};

export default IntroStep;
