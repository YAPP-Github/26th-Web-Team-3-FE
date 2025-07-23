import CheckIcon from "@/shared/assets/icon/check.svg";
import LockIcon from "@/shared/assets/icon/lock.svg";
import { cn } from "@/shared/utils/cn";

import * as styles from "./info-toast.css";

// TODO: api 연결 시 타임캡슐 상태 확인 후 연결
type InfoToastProps = {
  status: "success" | "locked";
  infoText: string;
  isExiting?: boolean;
  onClick?: () => void;
};

const InfoToast = ({ status, infoText, isExiting }: InfoToastProps) => {
  return (
    <div className={cn(styles.container, isExiting ? styles.container : "")}>
      {status === "success" && <CheckIcon className={styles.checkIcon} />}
      {status === "locked" && <LockIcon />}
      {infoText}
    </div>
  );
};

export default InfoToast;
