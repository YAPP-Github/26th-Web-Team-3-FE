"use client";

import SearchIcon from "@/shared/assets/svgs/search.svg";
import { cn } from "@/shared/utils/cn";
import Link from "next/link";

import * as styles from "./nav-home.css";

import { useState } from "react";

const NavHome = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
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
              <Link href="/explore" className={styles.buttonStyle}>
                탐색
              </Link>
            </li>
            <li>
              <Link href="/my" className={styles.buttonStyle}>
                내 캡슐
              </Link>
            </li>
            <li>
              <Link href="/setting" className={styles.buttonStyle}>
                설정
              </Link>
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
        <li>
          <Link
            href="/explore"
            className={styles.menuItem}
            onClick={handleMenuClose}
          >
            탐색
          </Link>
        </li>
        <li>
          <Link
            href="/my"
            className={styles.menuItem}
            onClick={handleMenuClose}
          >
            내 캡슐
          </Link>
        </li>
        <li>
          <Link
            href="/setting"
            className={styles.menuItem}
            onClick={handleMenuClose}
          >
            설정
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default NavHome;
