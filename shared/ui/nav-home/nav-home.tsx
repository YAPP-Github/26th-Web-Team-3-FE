"use client";

import SearchIcon from "@/shared/assets/svgs/search.svg";
import { cn } from "@/shared/utils/cn";

import * as styles from "./nav-home.css";

import { useRouter } from "next/navigation";
import { useState } from "react";

const NavHome = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleNavigation = (path: string) => {
    setIsMenuOpen(false);
    router.push(path);
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
              <button
                className={styles.buttonStyle}
                onClick={() => handleNavigation("/explore")}
              >
                탐색
              </button>
            </li>
            <li>
              <button
                className={styles.buttonStyle}
                onClick={() => handleNavigation("/my")}
              >
                내 캡슐
              </button>
            </li>
            <li>
              <button
                className={styles.buttonStyle}
                onClick={() => handleNavigation("/setting")}
              >
                설정
              </button>
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
          <button
            className={styles.menuItem}
            onClick={() => handleNavigation("/explore")}
          >
            탐색
          </button>
        </li>
        <li>
          <button
            className={styles.menuItem}
            onClick={() => handleNavigation("/my")}
          >
            내 캡슐
          </button>
        </li>
        <li>
          <button
            className={styles.menuItem}
            onClick={() => handleNavigation("/setting")}
          >
            설정
          </button>
        </li>
      </ul>
    </header>
  );
};

export default NavHome;
