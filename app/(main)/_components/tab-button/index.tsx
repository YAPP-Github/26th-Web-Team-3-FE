import Link from "next/link";
import type { ComponentProps } from "react";
import * as styles from "./tab-button.css";
interface Props extends ComponentProps<"button"> {
  text: string;
  selected?: boolean;
  href?: string;
}

const TabButton = ({ text, selected, href, ...props }: Props) => {
  if (href) {
    return (
      <Link href={href} className={styles.tabButton({ selected })}>
        {text}
      </Link>
    );
  }

  return (
    <button className={styles.tabButton({ selected })} {...props}>
      {text}
    </button>
  );
};

export default TabButton;
