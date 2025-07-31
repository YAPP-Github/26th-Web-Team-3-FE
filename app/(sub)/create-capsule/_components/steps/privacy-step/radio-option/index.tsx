import type { ComponentProps } from "react";

import * as styles from "./radio-option.css";

interface RadioOptionProps extends ComponentProps<"input"> {
  title: string;
  description: string;
  accessType: "PUBLIC" | "PRIVATE";
}

const RadioOption = ({
  title,
  description,
  accessType,
  ...props
}: RadioOptionProps) => {
  return (
    <div className={styles.radioList}>
      <input
        type="radio"
        id={accessType}
        className={styles.radio}
        value={accessType}
        {...props}
      />
      <label htmlFor={accessType}>
        <p className={styles.labelTitle}>{title}</p>
        <p className={styles.labelDescription}>{description}</p>
      </label>
    </div>
  );
};

export default RadioOption;
