import { queryOptions } from "@tanstack/react-query";

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
  my: (
    page?: number,
    size?: number,
    sort?: CapsuleSortType,
    filter?: MyCapsuleFilterType,
  ) => [...capsuleQueryKeys.all(), "my", page, size, sort, filter],
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
