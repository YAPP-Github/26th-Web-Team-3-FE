"use client";

import SearchIcon from "@/shared/assets/svgs/search.svg";
import { cn } from "@/shared/utils/cn";
import Link from "next/link";

import { useState } from "react";
import HamburgerMenuButton from "../hamburger-menu-button/hamburger-menu-button";
import * as styles from "./nav-home.css";

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
        {/* 데스크탑 메뉴 목록 */}
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
          <HamburgerMenuButton
            isMenuOpen={isMenuOpen}
            onClick={handleMenuClick}
          />
        </div>
      </nav>

      {/* 모바일 메뉴 목록 */}
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
            onClick={handleMenuClick}
          >
            탐색
          </Link>
        </li>
        <li>
          <Link
            href="/my"
            className={styles.menuItem}
            onClick={handleMenuClick}
          >
            내 캡슐
          </Link>
        </li>
        <li>
          <Link
            href="/setting"
            className={styles.menuItem}
            onClick={handleMenuClick}
          >
            설정
          </Link>
        </li>
      </ul>
    </>
  );
};

export default NavHome;
