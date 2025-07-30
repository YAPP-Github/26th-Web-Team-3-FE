import * as styles from "./title-section.css";

const TitleSection = () => {
  return (
    <div className={styles.captionContainer}>
      <h1 className={styles.title}>내 캡슐</h1>
      <p className={styles.description}>
        참여 중이거나 좋아요 누른 캡슐 모아보기
      </p>
    </div>
  );
};

export default TitleSection;
