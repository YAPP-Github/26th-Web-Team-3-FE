import LettieImage from "@/shared/assets/character/lettie_animate.png";
import Image from "next/image";
import * as styles from "./create-capsule-loading.css";

const CreateCapsuleLoading = () => {
  return (
    <div className={styles.loadingContainer}>
      <h1 className={styles.titleCaption}>
        타임캡슐을
        <br />
        만들고 있어요...
      </h1>
      <Image src={LettieImage} alt="lettie" className={styles.lettieImage} />
    </div>
  );
};

export default CreateCapsuleLoading;
