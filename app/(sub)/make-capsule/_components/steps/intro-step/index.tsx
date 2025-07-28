import TitleCaption from "@/app/(sub)/make-capsule/_components/title-caption";
import Lettie from "@/shared/assets/character/lettie_animate.png";
import Image from "next/image";

import * as styles from "./intro-step.css";

const IntroStep = () => {
  return (
    <main className={styles.container}>
      <TitleCaption />
      <Image
        className={styles.lettieImage}
        src={Lettie}
        alt="lettie-animate-image"
        width={340}
        height={340}
      />
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
    </main>
  );
};

export default IntroStep;
