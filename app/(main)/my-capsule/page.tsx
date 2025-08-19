"use client";
import { capsuleQueryOptions } from "@/shared/api/queries/capsule";
import {
  CAPSULE_SORT,
  type CapsuleSortType,
  MY_CAPSULE_FILTER,
  type MyCapsuleFilterType,
} from "@/shared/types/api/capsule";
import LoadingSpinner from "@/shared/ui/loading-spinner";
import RevealMotion from "@/shared/ui/motion/reveal-motion";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useCallback, useState } from "react";
import { useIntersectionObserver } from "react-simplikit";
import CardContainer from "./_components/card-container";
import SelectTabSection from "./_components/select-tab-section";
import TitleSection from "./_components/title-section";

import * as styles from "./page.css";

const MyCapsule = () => {
  const [selectedTab, setSelectedTab] = useState<MyCapsuleFilterType>(
    MY_CAPSULE_FILTER.ALL,
  );
  const [selectedSort, setSelectedSort] = useState<CapsuleSortType>(
    CAPSULE_SORT.DEFAULT,
  );

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isPending } =
    useInfiniteQuery(
      capsuleQueryOptions.myCapsuleList(selectedSort, selectedTab),
    );

  const onIntersect = useCallback(
    (entry: IntersectionObserverEntry) => {
      if (!entry.isIntersecting) return;
      if (hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    },
    [hasNextPage, isFetchingNextPage, fetchNextPage],
  );

  const footerRef = useIntersectionObserver<HTMLDivElement>(onIntersect, {
    threshold: 0.1,
    rootMargin: "100px 0px",
  });

  const handleSelect = (value: MyCapsuleFilterType) => {
    setSelectedTab(value);
  };

  const handleSort = (value: CapsuleSortType) => {
    setSelectedSort(value);
  };

  const allCapsules =
    data?.pages.flatMap((page) => page.result.timeCapsules) || [];

  return (
    <>
      <RevealMotion>
        <TitleSection />
      </RevealMotion>
      <SelectTabSection
        onSelect={handleSelect}
        selectedTab={selectedTab}
        handleSort={handleSort}
      />
      <CardContainer capsules={allCapsules} isLoading={isPending} />

      <div ref={footerRef} className={styles.footer}>
        {isFetchingNextPage && <LoadingSpinner loading={true} size={20} />}
      </div>
    </>
  );
};

export default MyCapsule;
