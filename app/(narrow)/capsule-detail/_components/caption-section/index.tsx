import * as styles from "./caption-section.css";

interface Props {
  description: string;
}

const CaptionSection = ({ description }: Props) => {
  return <div className={styles.container}>{description}</div>;
};

export default CaptionSection;
