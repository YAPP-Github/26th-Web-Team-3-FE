import * as styles from "./home-title-section.css";

const HomeTitleSection = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.homeTitleSection}>
        당신을 위한 타임캡슐 <br />
        느린 이야기를 주고 받아요
      </h1>
    </div>
  );
};

export default HomeTitleSection;
