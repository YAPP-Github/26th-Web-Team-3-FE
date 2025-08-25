"use client";
import SearchIcon from "@/shared/assets/icon/search.svg";
import Logo from "@/shared/assets/logo/logo_symbol_wordmark.svg";
import { PATH } from "@/shared/constants/path";
import { cn } from "@/shared/utils/cn";
import Link from "next/link";
import { useState } from "react";
import { useOutsideClickEffect } from "react-simplikit";
import HamburgerMenuButton from "../../hamburger-menu-button";
import * as styles from "./navbar-main.css";

const NavbarMain = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [wrapperRef, setWrapperRef] = useState<HTMLDivElement | null>(null);

  const handleMenuClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useOutsideClickEffect(wrapperRef, () => {
    setIsMenuOpen(false);
  });

  return (
    <div ref={setWrapperRef}>
      <nav
        className={cn(
          styles.navHomeStyle,
          isMenuOpen ? styles.navHomeStyleOpen : styles.navHomeStyleClose,
        )}
      >
        <Link href={PATH.HOME} tabIndex={0}>
          <Logo />
        </Link>
        <div className={styles.navWrapper}>
          <ul className={styles.navList}>
            <li>
              <Link href={PATH.EXPLORE} className={styles.buttonStyle} tabIndex={0}>
                탐색
              </Link>
            </li>
            <li>
              <Link href={PATH.MY_CAPSULE} className={styles.buttonStyle} tabIndex={0}>
                내 캡슐
              </Link>
            </li>
            <li>
              <Link href={PATH.SETTING} className={styles.buttonStyle} tabIndex={0}>
                설정
              </Link>
            </li>
          </ul>
          <Link href={PATH.SEARCH} className={styles.searchButtonStyle} tabIndex={0}>
            <SearchIcon width={"2rem"} height={"2rem"} />
          </Link>
          <HamburgerMenuButton
            isMenuOpen={isMenuOpen}
            onClick={handleMenuClick}
            tabIndex={0}
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
            tabIndex={isMenuOpen ? 0 : -1}
          >
            탐색
          </Link>
        </li>
        <li>
          <Link
            href={PATH.MY_CAPSULE}
            className={styles.menuItem}
            onClick={handleMenuClick}
            tabIndex={isMenuOpen ? 0 : -1}
          >
            내 캡슐
          </Link>
        </li>
        <li>
          <Link
            href={PATH.SETTING}
            className={styles.menuItem}
            onClick={handleMenuClick}
            tabIndex={isMenuOpen ? 0 : -1}
          >
            설정
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavbarMain;
