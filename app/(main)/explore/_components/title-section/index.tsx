import * as styles from "./title-section.css";

const TitleSection = () => {
  return (
    <div className={styles.captionContainer}>
      <h1 className={styles.title}>탐색</h1>
      <p className={styles.description}>만들어진 다양한 캡슐을 살펴보세요</p>
    </div>
  );
};

export default TitleSection;
