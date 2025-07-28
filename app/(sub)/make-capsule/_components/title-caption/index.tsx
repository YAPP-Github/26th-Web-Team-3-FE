import type { ReactElement } from "react";
import * as styles from "./title-caption.css";

interface Props {
  title: ReactElement;
  className?: string;
}

const TitleCaption = ({ title }: Props) => {
  return <h1 className={styles.titleCaption}>{title}</h1>;
};

export default TitleCaption;
