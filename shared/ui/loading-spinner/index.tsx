import { ClipLoader } from "react-spinners";

import * as styles from "./loading-spinner.css";

interface LoadingSpinnerProps {
  loading: boolean;
  size?: number;
}

const LoadingSpinner = ({ loading, size = 20 }: LoadingSpinnerProps) => {
  return (
    <div className={styles.wrapper}>
      <ClipLoader
        color="#FFF"
        loading={loading}
        size={size}
        aria-label="Loading Spinner"
      />
    </div>
  );
};

export default LoadingSpinner;
