"use client";

import SearchIcon from "@/shared/assets/icon/search.svg";
import { PATH } from "@/shared/constants/path";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import * as styles from "./search-bar-section.css";

interface SearchBarSectionProps {
  keyword: string;
}

const SearchBarSection = ({ keyword }: SearchBarSectionProps) => {
  const [inputValue, setInputValue] = useState(keyword);
  const router = useRouter();

  useEffect(() => {
    setInputValue(keyword);
  }, [keyword]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      router.push(`/search?keyword=${inputValue.trim()}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.searchBarContainer}>
        <SearchIcon className={styles.searchBarIcon} />
        <input
          className={styles.searchBar}
          placeholder="찾는 캡슐을 검색해주세요"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <Link href={PATH.HOME} className={styles.closeButton}>
        닫기
      </Link>
    </div>
  );
};

export default SearchBarSection;
