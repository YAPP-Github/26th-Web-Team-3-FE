import TitleCaption from "@/app/(sub)/make-capsule/_components/title-caption";
import Lettie from "@/shared/assets/character/lettie_animate.png";
import Button from "@/shared/ui/button";
import RevealSectionMotion from "@/shared/ui/motion/reveal-section-motion";
import Image from "next/image";
import * as styles from "./date-step.css";

const DateStep = () => {
  return (
    <div className={styles.container}>
      <RevealSectionMotion>
        <TitleCaption
          title={
            <span>
              언제 열고,
              <br />
              언제까지 받을까요?
            </span>
          }
        />
      </RevealSectionMotion>
      <Image
        className={styles.lettieImage}
        src={Lettie}
        alt="lettie-animate-image"
        width={340}
        height={340}
      />
      <div className={styles.inputSectionWrapper}>
        <RevealSectionMotion delay={0.8}>
          <div className={styles.inputContainer}>
            <p className={styles.inputCaption}>타임캡슐 오픈일</p>
            <div className={styles.inputWrapper}>
              <label htmlFor="date" className={styles.labelStyle}>
                <input type="date" id="date" className={styles.inputStyle} />
              </label>
              <label htmlFor="time" className={styles.labelStyle}>
                <input type="time" id="time" className={styles.inputStyle} />
              </label>
            </div>
          </div>
          <div className={styles.inputContainer}>
            <p className={styles.inputCaption}>편지 작성 마감일</p>
            <label htmlFor="date">
              <input type="date" id="date" className={styles.inputStyle} />
            </label>
          </div>
        </RevealSectionMotion>
      </div>

      <div className={styles.buttonContainer}>
        <RevealSectionMotion delay={1.2}>
          <Button variant="primary" text="다음" />
        </RevealSectionMotion>
      </div>
    </div>
  );
};

export default DateStep;
