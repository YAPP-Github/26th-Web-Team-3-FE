import TimeIcon from "@/shared/assets/icon/time.svg";
import * as styles from "./open-info-section.css";
interface Props {
  openAt: string;
}

const OpenInfoSection = ({ openAt }: Props) => {
  return (
    <div className={styles.container}>
      <TimeIcon className={styles.iconStyle} />
      <p className={styles.textStyle}>오픈일</p>
      <p>{openAt}</p>
    </div>
  );
};

export default OpenInfoSection;
