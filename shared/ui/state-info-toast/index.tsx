import CheckIcon from "@/shared/assets/icon/check.svg";
import LockIcon from "@/shared/assets/icon/lock.svg";

import * as styles from "./state-info-toast.css";

// TODO: api 연결 시 타임캡슐 상태 확인 후 연결
type StateInfoToastProps = {
  status: "success" | "locked";
  infoText: string;
};

const StateInfoToast = ({ status, infoText }: StateInfoToastProps) => {
  return (
    <div className={styles.container}>
      {status === "success" && <CheckIcon className={styles.checkIcon} />}
      {status === "locked" && <LockIcon />}
      {infoText}
    </div>
  );
};

export default StateInfoToast;
