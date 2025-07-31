"use client";

import { createISOString } from "@/shared/utils/date";
import { useRef } from "react";
import { useFormContext } from "react-hook-form";
import * as styles from "./capsule-open-at-input.css";

const CapsuleOpenAtInput = () => {
  const { setValue, register } = useFormContext();
  const dateTimeRef = useRef({ date: "", time: "" });

  const handleInputChange =
    (type: "date" | "time") => (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      dateTimeRef.current[type] = value;

      const { date, time } = dateTimeRef.current;
      if (date && time) {
        const combinedDateTime = createISOString(date, `${time}:00`);
        setValue("openAt", combinedDateTime, { shouldValidate: true });
      }
    };

  return (
    <div className={styles.inputContainer}>
      <p className={styles.inputCaption}>타임캡슐 오픈일</p>
      <div className={styles.inputWrapper}>
        <label htmlFor="openDate" className={styles.labelStyle}>
          <input
            type="date"
            id="openDate"
            className={styles.inputStyle}
            onChange={handleInputChange("date")}
            required
          />
        </label>
        <label htmlFor="openTime" className={styles.labelStyle}>
          <input
            type="time"
            id="openTime"
            className={styles.inputStyle}
            onChange={handleInputChange("time")}
            required
          />
        </label>
      </div>

      <input type="hidden" {...register("openAt")} />
    </div>
  );
};

export default CapsuleOpenAtInput;
