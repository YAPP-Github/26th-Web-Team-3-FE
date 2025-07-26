import * as styles from "./info-title.css";
interface Props {
  title: string;
  participantCount: number;
  joinLettersCount: number;
}

const InfoTitle = ({ title, participantCount, joinLettersCount }: Props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>
        {participantCount}명 참여﹒{joinLettersCount}통
      </p>
    </div>
  );
};

export default InfoTitle;
