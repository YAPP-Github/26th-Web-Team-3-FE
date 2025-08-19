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
  lists: (sort?: CapsuleSortType, type?: string) => [
    ...capsuleQueryKeys.all(),
    "lists",
    sort,
    type,
  ],
  my: (sort?: CapsuleSortType, filter?: MyCapsuleFilterType) => [
    ...capsuleQueryKeys.all(),
    "my",
    sort,
    filter,
  ],
} as const;

export const capsuleQueryOptions = {
  capsuleDetail: (id: string) =>
    queryOptions({
      queryKey: capsuleQueryKeys.detail(id),
      queryFn: () => getCapsuleDetail(id),
      enabled: !!id,
    }),

  capsuleLists: (sort?: CapsuleSortType, type?: string) =>
    infiniteQueryOptions({
      queryKey: capsuleQueryKeys.lists(sort, type),
      queryFn: ({ pageParam = 0 }) =>
        getCapsuleLists(pageParam, 20, sort, type),
      getNextPageParam: (lastPage) => {
        const { pageNumber, totalPages } = lastPage.result;
        return pageNumber < totalPages - 1 ? pageNumber + 1 : undefined;
      },
      initialPageParam: 0,
    }),

  myCapsuleList: (sort?: CapsuleSortType, filter?: MyCapsuleFilterType) =>
    infiniteQueryOptions({
      queryKey: capsuleQueryKeys.my(sort, filter),
      queryFn: ({ pageParam = 0 }) =>
        getMyCapsuleList(pageParam, 20, sort, filter),
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
  type?: string
) => {
  return apiClient.get<CapsuleListsRes>(
    ENDPOINTS.CAPSULE_LISTS(page, size, sort, type)
  );
};

const getMyCapsuleList = (
  page?: number,
  size?: number,
  sort?: CapsuleSortType,
  filter?: MyCapsuleFilterType
) => {
  return apiClient.get<CapsuleListsRes>(
    ENDPOINTS.MY_CAPSULE_LIST(page, size, sort, filter)
  );
};
