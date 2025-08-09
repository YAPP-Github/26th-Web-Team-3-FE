"use client";

import { getTodayDate } from "@/shared/utils/date";
import { useFormContext } from "react-hook-form";
import * as styles from "./letter-close-at-input.css";

const LetterCloseAtInput = () => {
  const { register } = useFormContext();

  return (
    <div className={styles.inputContainer}>
      <p className={styles.inputCaption}>편지 작성 마감일</p>
      <label htmlFor="closeDate">
        <input
          type="date"
          id="closeDate"
          className={styles.inputStyle}
          {...register("closedAt", {
            setValueAs: (v) =>
              v ? new Date(`${v}T00:00:00`).toISOString() : undefined,
          })}
          min={getTodayDate()}
        />
      </label>
    </div>
  );
};

export default LetterCloseAtInput;
