import { infiniteQueryOptions, queryOptions } from "@tanstack/react-query";

import { ENDPOINTS } from "@/shared/constants/endpoints";

import type {
  CapsuleDetailRes,
  CapsuleListsRes,
  CapsuleSortType,
  MyCapsuleFilterType,
} from "@/shared/types/api/capsule";

import { apiClient } from "../api-client";

export const capsuleQueryKeys = {
  all: () => ["capsule"],
  detail: (id: string) => [...capsuleQueryKeys.all(), id],
  lists: (
    page?: number,
    size?: number,
    sort?: CapsuleSortType,
    type?: string,
  ) => [...capsuleQueryKeys.all(), "lists", page, size, sort, type],
  infiniteLists: (sort?: CapsuleSortType, type?: string) => [
    ...capsuleQueryKeys.all(),
    "infiniteLists",
    sort,
    type,
  ],
  my: (
    page?: number,
    size?: number,
    sort?: CapsuleSortType,
    filter?: MyCapsuleFilterType,
  ) => [...capsuleQueryKeys.all(), "my", page, size, sort, filter],
  infiniteMy: (sort?: CapsuleSortType, filter?: MyCapsuleFilterType) => [
    ...capsuleQueryKeys.all(),
    "infiniteMy",
    sort,
    filter,
  ],
  searchList: (keyword: string) => [
    ...capsuleQueryKeys.all(),
    "searchList",
    keyword,
  ],
} as const;

export const capsuleQueryOptions = {
  capsuleDetail: (id: string) =>
    queryOptions({
      queryKey: capsuleQueryKeys.detail(id),
      queryFn: () => getCapsuleDetail(id),
      enabled: !!id,
    }),
  capsuleLists: (
    page?: number,
    size?: number,
    sort?: CapsuleSortType,
    type?: string,
  ) =>
    queryOptions({
      queryKey: capsuleQueryKeys.lists(page, size, sort, type),
      queryFn: () => getCapsuleLists(page, size, sort, type),
    }),
  infiniteCapsuleLists: (sort?: CapsuleSortType, type?: string) =>
    infiniteQueryOptions({
      queryKey: capsuleQueryKeys.infiniteLists(sort, type),
      queryFn: ({ pageParam = 0 }) =>
        getCapsuleLists(pageParam, 20, sort, type),
      getNextPageParam: (lastPage) => {
        const { pageNumber, totalPages } = lastPage.result;
        return pageNumber < totalPages - 1 ? pageNumber + 1 : undefined;
      },
      initialPageParam: 0,
    }),
  myCapsuleList: (
    page?: number,
    size?: number,
    sort?: CapsuleSortType,
    filter?: MyCapsuleFilterType,
  ) =>
    queryOptions({
      queryKey: capsuleQueryKeys.my(page, size, sort, filter),
      queryFn: () => getMyCapsuleList(page, size, sort, filter),
    }),
  infiniteMyCapsuleList: (
    sort?: CapsuleSortType,
    filter?: MyCapsuleFilterType,
  ) =>
    infiniteQueryOptions({
      queryKey: capsuleQueryKeys.infiniteMy(sort, filter),
      queryFn: ({ pageParam = 0 }) =>
        getMyCapsuleList(pageParam, 20, sort, filter),
      getNextPageParam: (lastPage) => {
        const { pageNumber, totalPages } = lastPage.result;
        return pageNumber < totalPages - 1 ? pageNumber + 1 : undefined;
      },
      initialPageParam: 0,
    }),

  searchCapsuleList: (keyword: string) =>
    infiniteQueryOptions({
      queryKey: capsuleQueryKeys.searchList(keyword),
      queryFn: ({ pageParam = 0 }) =>
        getSearchCapsuleLists(keyword, pageParam, 20),
      getNextPageParam: (lastPage) => {
        const { pageNumber, totalPages } = lastPage.result;
        return pageNumber < totalPages - 1 ? pageNumber + 1 : undefined;
      },
      initialPageParam: 0,
    }),
} as const;

const getCapsuleDetail = (id: string) => {
  return apiClient.get<CapsuleDetailRes>(ENDPOINTS.CAPSULE_DETAIL(id));
};

const getCapsuleLists = (
  page?: number,
  size?: number,
  sort?: CapsuleSortType,
  type?: string,
) => {
  return apiClient.get<CapsuleListsRes>(
    ENDPOINTS.CAPSULE_LISTS(page, size, sort, type),
  );
};

const getSearchCapsuleLists = (
  keyword: string,
  page?: number,
  size?: number,
) => {
  return apiClient.get<CapsuleListsRes>(
    ENDPOINTS.CAPSULE_SEARCH_LISTS(keyword, page, size),
  );
};

const getMyCapsuleList = (
  page?: number,
  size?: number,
  sort?: CapsuleSortType,
  filter?: MyCapsuleFilterType,
) => {
  return apiClient.get<CapsuleListsRes>(
    ENDPOINTS.MY_CAPSULE_LIST(page, size, sort, filter),
  );
};
