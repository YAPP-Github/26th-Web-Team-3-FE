"use client";

import SearchIcon from "@/shared/assets/icon/search.svg";
import { PATH } from "@/shared/constants/path";
import { cn } from "@/shared/utils/cn";
import Link from "next/link";
import { useState } from "react";
import HamburgerMenuButton from "../../hamburger-menu-button";
import * as styles from "./navbar-main.css";

const NavbarMain = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <nav
        className={cn(
          styles.navHomeStyle,
          isMenuOpen ? styles.navHomeStyleOpen : styles.navHomeStyleClose,
        )}
      >
        <div>logo</div>
        <div className={styles.navWrapper}>
          <ul className={styles.navList}>
            <li>
              <Link href={PATH.EXPLORE} className={styles.buttonStyle}>
                탐색
              </Link>
            </li>
            <li>
              <Link href={PATH.MY_CAPSULE} className={styles.buttonStyle}>
                내 캡슐
              </Link>
            </li>
            <li>
              <Link href={PATH.SETTING} className={styles.buttonStyle}>
                설정
              </Link>
            </li>
          </ul>
          <Link href={PATH.SEARCH} className={styles.searchButtonStyle}>
            <SearchIcon width={"2rem"} height={"2rem"} />
          </Link>
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
          isMenuOpen ? styles.menuContainerOpen : styles.navHomeStyleClose,
        )}
      >
        <li>
          <Link
            href={PATH.EXPLORE}
            className={styles.menuItem}
            onClick={handleMenuClick}
          >
            탐색
          </Link>
        </li>
        <li>
          <Link
            href={PATH.MY_CAPSULE}
            className={styles.menuItem}
            onClick={handleMenuClick}
          >
            내 캡슐
          </Link>
        </li>
        <li>
          <Link
            href={PATH.SETTING}
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

export default NavbarMain;
