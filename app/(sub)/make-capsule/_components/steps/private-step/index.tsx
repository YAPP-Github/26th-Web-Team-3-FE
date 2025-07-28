import TitleCaption from "@/app/(sub)/make-capsule/_components/title-caption";
import LettieImage from "@/shared/assets/character/lettie_animate.png";
import Button from "@/shared/ui/button";
import RevealSectionMotion from "@/shared/ui/motion/reveal-section-motion";
import Image from "next/image";
import * as styles from "./private-step.css";
const PrivateStep = () => {
  return (
    <div className={styles.container}>
      <RevealSectionMotion>
        <TitleCaption
          title={
            <span>
              타임캡슐을 누구에게
              <br />
              공개할까요?
            </span>
          }
        />
      </RevealSectionMotion>

      <Image
        src={LettieImage}
        alt="lettie"
        width={340}
        height={340}
        className={styles.lettieImage}
      />
      <div className={styles.radioSection}>
        <RevealSectionMotion delay={0.8}>
          <div className={styles.radioList}>
            <input type="radio" id="public" className={styles.radio} />
            <label htmlFor="public">
              <p className={styles.labelTitle}>모두에게 공개</p>
              <p className={styles.labelDescription}>
                누구나 타임캡슐에 편지를 남길 수 있어요.
              </p>
            </label>
          </div>
          <div className={styles.radioList}>
            <input type="radio" id="private" className={styles.radio} />
            <label htmlFor="private">
              <p className={styles.labelTitle}>링크로 초대</p>
              <p className={styles.labelDescription}>
                링크를 통해서만 캡슐에 참여할 수 있어요.
              </p>
            </label>
          </div>
        </RevealSectionMotion>
      </div>
      <div className={styles.buttonContainer}>
        <RevealSectionMotion delay={1.2}>
          <Button variant="primary" text="캡슐 만들기" />
        </RevealSectionMotion>
      </div>
    </div>
  );
};

export default PrivateStep;
