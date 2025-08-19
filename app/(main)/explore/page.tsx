"use client";
import SelectTabSection from "@/app/(main)/explore/_components/select-tab-section";
import TitleSection from "@/app/(main)/explore/_components/title-section";
import AddCapsuleButton from "@/app/(sub)/create-capsule/_components/add-capsule-button";
import { capsuleQueryOptions } from "@/shared/api/queries/capsule";
import { CAPSULE_SORT, type CapsuleSortType } from "@/shared/types/api/capsule";
import LoadingSpinner from "@/shared/ui/loading-spinner";
import RevealMotion from "@/shared/ui/motion/reveal-motion";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useIntersectionObserver } from "react-simplikit";
import CardContainer from "./_components/card-container";
import Footer from "./_components/footer";

const Explore = () => {
  const [selectedTab, setSelectedTab] = useState<string>("all");
  const [selectedSort, setSelectedSort] = useState<CapsuleSortType>(
    CAPSULE_SORT.DEFAULT,
  );

  const footerRef = useIntersectionObserver<HTMLDivElement>(
    (entry) => {
      if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    },
    { threshold: 0.8 },
  );

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isPending } =
    useInfiniteQuery(
      capsuleQueryOptions.capsuleLists(selectedSort, selectedTab),
    );

  const handleSelect = (value: string) => {
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
        handleSort={handleSort}
        onSelect={handleSelect}
        selectedTab={selectedTab}
      />
      <AddCapsuleButton />
      <CardContainer capsules={allCapsules} isLoading={isPending} />

      <div ref={footerRef}>
        <Footer />
        {isFetchingNextPage && <LoadingSpinner loading={true} size={20} />}
      </div>
    </>
  );
};

export default Explore;
