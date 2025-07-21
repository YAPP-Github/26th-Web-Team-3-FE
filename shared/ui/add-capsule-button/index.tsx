import PlusIcon from "@/shared/assets/icon/plus.svg";

import * as styles from "./add-capsule-button.css";

const AddCapsuleButton = () => {
  return (
    <button className={styles.buttonStyle}>
      <PlusIcon />
      만들기
    </button>
  );
};

export default AddCapsuleButton;
