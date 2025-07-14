import { cn } from "@/shared/utils/cn";
import type { HTMLAttributes } from "react";
import * as styles from "./hamburger-menu-button.css";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  isMenuOpen: boolean;
}

const HamburgerMenuButton = ({ isMenuOpen, ...props }: Props) => {
  return (
    <>
      {/* 메뉴버튼 클릭시 햄버거바 -> x버튼으로 rotate */}
      <button className={styles.menuButtonStyle} {...props}>
        <div className={styles.hamburgerIcon}>
          <div
            className={cn(
              styles.hamburgerLineTop,
              isMenuOpen ? styles.xIconTop : "",
            )}
          ></div>
          <div
            className={cn(
              styles.hamburgerLineMiddle,
              isMenuOpen ? styles.xIconMiddle : "",
            )}
          ></div>
          <div
            className={cn(
              styles.hamburgerLineBottom,
              isMenuOpen ? styles.xIconBottom : "",
            )}
          ></div>
        </div>
      </button>
    </>
  );
};

export default HamburgerMenuButton;
