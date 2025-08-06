import * as styles from "./capsule-image.css";

interface CapsuleImageProps {
  imageUrl: string;
}

const CapsuleImage = ({ imageUrl }: CapsuleImageProps) => {
  return (
    <div className={styles.container}>
      {/* <Image src={imageUrl} width={260} height={253} alt="캡슐 이미지" /> */}
    </div>
  );
};

export default CapsuleImage;
