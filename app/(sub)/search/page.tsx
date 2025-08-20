"use client";

import CardContainer from "@/app/(sub)/search/_components/card-container";
import SearchBarSection from "@/app/(sub)/search/_components/search-bar-section";
import { capsuleQueryOptions } from "@/shared/api/queries/capsule";
import LoadingSpinner from "@/shared/ui/loading-spinner";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useIntersectionObserver } from "react-simplikit";

const SearchPage = () => {
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword") ?? "";

  const {
    data: searchResults,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    ...capsuleQueryOptions.searchCapsuleList(keyword),
    enabled: keyword.trim().length > 0,
  });

  const footerRef = useIntersectionObserver<HTMLDivElement>(
    (entry) => {
      if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    },
    { threshold: 0.8 },
  );

  const allCapsules =
    searchResults?.pages.flatMap((page) => page.result.timeCapsules) || [];

  return (
    <div>
      <SearchBarSection keyword={keyword} />
      <CardContainer capsules={allCapsules} isLoading={isLoading} keyword={keyword} />

      <div ref={footerRef}>
        {isFetchingNextPage && <LoadingSpinner loading={true} size={20} />}
      </div>
    </div>
  );
};

export default SearchPage;
