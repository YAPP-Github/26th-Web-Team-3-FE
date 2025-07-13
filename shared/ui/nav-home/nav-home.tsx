import * as styles from "./nav-home.css";

const NavHome = () => {
  return (
    <nav className={styles.navHomeStyle}>
      <div>logo</div>
      <ul className={styles.buttonWrapper}>
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
    </nav>
  );
};

export default NavHome;
