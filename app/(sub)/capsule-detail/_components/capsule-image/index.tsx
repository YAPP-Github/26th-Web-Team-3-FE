import Image from "next/image";
import * as styles from "./capsule-image.css";

interface CapsuleImageProps {
  imageUrl: string;
}

const CapsuleImage = ({ imageUrl }: CapsuleImageProps) => {
  if (!imageUrl) {
    return null;
  }

  return (
    <div className={styles.container}>
      <Image src={imageUrl} width={252} height={280} alt="apng" unoptimized />
    </div>
  );
};

export default CapsuleImage;
