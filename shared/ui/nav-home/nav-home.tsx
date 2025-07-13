"use client";

import SearchIcon from "@/shared/assets/svgs/search.svg";
import { cn } from "@/shared/utils/cn";

import * as styles from "./nav-home.css";

import { useState } from "react";

const NavHome = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <nav
        className={cn(
          styles.navHomeStyle,
          isMenuOpen ? styles.navHomeStyleOpen : "",
        )}
      >
        <div>logo</div>
        <div className={styles.navWrapper}>
          <ul className={styles.navList}>
            <li>
              <button className={styles.buttonStyle}>탐색</button>
            </li>
            <li>
              <button className={styles.buttonStyle}>내 캡슐</button>
            </li>
            <li>
              <button className={styles.buttonStyle}>설정</button>
            </li>
          </ul>
          <button className={styles.searchButtonStyle}>
            <SearchIcon width={"2rem"} height={"2rem"} />
          </button>

          {/* 메뉴버튼 클릭시 햄버거바 -> x버튼으로 rotate */}
          <button className={styles.menuButtonStyle} onClick={handleMenuClick}>
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
        </div>
      </nav>
      <ul
        className={cn(
          styles.menuContainer,
          isMenuOpen ? styles.menuContainerOpen : "",
        )}
      >
        <li className={styles.menuItem}>
          <span>탐색</span>
        </li>
        <li className={styles.menuItem}>
          <span>내 캡슐</span>
        </li>
        <li className={styles.menuItem}>
          <span>설정</span>
        </li>
      </ul>
    </>
  );
};

export default NavHome;
