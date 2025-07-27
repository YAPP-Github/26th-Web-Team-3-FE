"use client";

import SearchIcon from "@/shared/assets/icon/search.svg";
import { useRouter } from "next/navigation";
import * as styles from "./search-bar-section.css";

const SearchBarSection = () => {
  const router = useRouter();
  return (
    <div className={styles.wrapper}>
      <div className={styles.searchBarContainer}>
        <SearchIcon className={styles.searchBarIcon} />
        <input
          className={styles.searchBar}
          placeholder="찾는 캡슐을 검색해주세요"
        />
      </div>
      <button className={styles.closeButton} onClick={() => router.back()}>
        닫기
      </button>
    </div>
  );
};

export default SearchBarSection;
