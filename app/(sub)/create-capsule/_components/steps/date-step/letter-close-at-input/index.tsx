import * as styles from "./letter-close-at-input.css";

const LetterCloseAtInput = () => {
  return (
    <div className={styles.inputContainer}>
      <p className={styles.inputCaption}>편지 작성 마감일</p>
      <label htmlFor="closeDate">
        <input type="date" id="closeDate" className={styles.inputStyle} />
      </label>
    </div>
  );
};

export default LetterCloseAtInput;
