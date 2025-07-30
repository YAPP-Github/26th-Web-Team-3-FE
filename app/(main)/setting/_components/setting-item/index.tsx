import ArrowRight from "@/shared/assets/icon/right.svg";
import * as styles from "./setting-item.css";

interface SettingItemProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const SettingItem = ({ children, onClick }: SettingItemProps) => {
  return (
    <div className={styles.itemContainer}>
      <p className={styles.item}>{children}</p>
      <button onClick={onClick} type="button">
        <ArrowRight className={styles.arrowRight} />
      </button>
    </div>
  );
};

export default SettingItem;
