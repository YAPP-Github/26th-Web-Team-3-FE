"use client";

import { useFormContext } from "react-hook-form";
import * as styles from "./letter-close-at-input.css";

const LetterCloseAtInput = () => {
  const { register, setValue } = useFormContext();
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value;
    if (date) {
      const combinedDateTime = new Date(`${date}T23:59:59`).toISOString();
      setValue("closedAt", combinedDateTime);
    }
  };

  return (
    <div className={styles.inputContainer}>
      <p className={styles.inputCaption}>편지 작성 마감일</p>
      <label htmlFor="closeDate">
        <input
          type="date"
          id="closeDate"
          className={styles.inputStyle}
          onChange={handleDateChange}
        />
      </label>
      <input type="hidden" {...register("closedAt")} />
    </div>
  );
};

export default LetterCloseAtInput;
