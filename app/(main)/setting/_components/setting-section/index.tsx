import * as styles from "./setting-section.css";

interface Props {
  category?: string;
  children: React.ReactNode;
}

const SettingSection = ({ category, children }: Props) => {
  return (
    <div className={styles.settingSectionContainer}>
      <p className={styles.category}>{category && category}</p>
      {children}
    </div>
  );
};

export default SettingSection;
