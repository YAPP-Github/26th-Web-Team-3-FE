"use client";

import SearchIcon from "@/shared/assets/icon/search.svg";
import { PATH } from "@/shared/constants/path";
import Link from "next/link";
import * as styles from "./search-bar-section.css";

const SearchBarSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.searchBarContainer}>
        <SearchIcon className={styles.searchBarIcon} />
        <input
          className={styles.searchBar}
          placeholder="찾는 캡슐을 검색해주세요"
        />
      </div>
      <Link href={PATH.HOME} className={styles.closeButton}>
        닫기
      </Link>
    </div>
  );
};

export default SearchBarSection;
