import type { ComponentProps } from "react";
import * as styles from "./tab-button.css";

interface Prop extends ComponentProps<"button"> {
  text: string;
  selected?: boolean;
}

const TabButton = ({ text, selected }: Prop) => {
  return <button className={styles.tabButton({ selected })}>{text}</button>;
};

export default TabButton;
