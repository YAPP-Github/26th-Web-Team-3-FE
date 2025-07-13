import MenuIcon from "@/shared/assets/svgs/menu.svg";
import SearchIcon from "@/shared/assets/svgs/search.svg";

import * as styles from "./nav-home.css";

const NavHome = () => {
  return (
    <nav className={styles.navHomeStyle}>
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
        <button className={styles.menuButtonStyle}>
          <MenuIcon width={"2rem"} height={"2rem"} />
        </button>
      </div>
    </nav>
  );
};

export default NavHome;
