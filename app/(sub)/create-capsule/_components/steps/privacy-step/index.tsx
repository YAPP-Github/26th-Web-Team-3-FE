import { useFormContext } from "react-hook-form";

import TitleCaption from "@/app/(sub)/create-capsule/_components/title-caption";
import LettieImage from "@/shared/assets/character/lettie_animate.png";
import Button from "@/shared/ui/button";
import RevealMotion from "@/shared/ui/motion/reveal-motion";
import Image from "next/image";
import RadioOption from "./radio-option";

import * as styles from "./private-step.css";

interface Props {
  handleNextStep: (step: string) => void;
}

const PrivacyStep = ({ handleNextStep }: Props) => {
  const { register } = useFormContext();

  return (
    <div className={styles.container}>
      <RevealMotion>
        <TitleCaption
          title={
            <span>
              타임캡슐을 누구에게
              <br />
              공개할까요?
            </span>
          }
        />
      </RevealMotion>
      <Image
        src={LettieImage}
        alt="lettie"
        width={340}
        height={340}
        className={styles.lettieImage}
      />
      <div className={styles.radioSection}>
        <RevealMotion delay={0.8}>
          <RadioOption
            accessType="PUBLIC"
            title="모두에게 공개"
            description="누구나 타임캡슐에 편지를 남길 수 있어요."
            {...register("accessType")}
          />
          <RadioOption
            accessType="PRIVATE"
            title="링크로 초대"
            description="링크를 통해서만 캡슐에 참여할 수 있어요."
            {...register("accessType")}
          />
        </RevealMotion>
      </div>
      <div className={styles.buttonContainer}>
        <RevealMotion delay={1.2}>
          <Button
            variant="primary"
            text="캡슐 만들기"
            onClick={() => handleNextStep("complete")}
          />
        </RevealMotion>
      </div>
    </div>
  );
};

export default PrivacyStep;
