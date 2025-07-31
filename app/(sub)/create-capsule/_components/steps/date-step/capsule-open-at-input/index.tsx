import * as styles from "./capsule-open-at-input.css";

const CapsuleOpenAtInput = () => {
  return (
    <div className={styles.inputContainer}>
      <p className={styles.inputCaption}>타임캡슐 오픈일</p>
      <div className={styles.inputWrapper}>
        <label htmlFor="openDate" className={styles.labelStyle}>
          <input type="date" id="openDate" className={styles.inputStyle} />
        </label>
        <label htmlFor="openTime" className={styles.labelStyle}>
          <input type="time" id="openTime" className={styles.inputStyle} />
        </label>
      </div>
    </div>
  );
};

export default CapsuleOpenAtInput;
