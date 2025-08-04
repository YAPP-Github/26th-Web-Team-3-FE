import { queryOptions } from "@tanstack/react-query";

import { ENDPOINTS } from "@/shared/constants/endpoints";
import type {
  CapsuleDetailRes,
  CapsuleListsRes,
} from "@/shared/types/api/capsule";
import { apiClient } from "../api-client";

export const capsuleQueryKeys = {
  all: () => ["capsule"],
  detail: (id: string) => [...capsuleQueryKeys.all(), id],
  lists: () => [...capsuleQueryKeys.all(), "lists"],
} as const;

export const capsuleQueryOptions = {
  capsuleDetail: (id: string) =>
    queryOptions({
      queryKey: capsuleQueryKeys.detail(id),
      queryFn: () => getCapsuleDetail(id),
      enabled: !!id,
    }),
  capsuleLists: () =>
    queryOptions({
      queryKey: capsuleQueryKeys.lists(),
      queryFn: () => getCapsuleLists(),
    }),
};

const getCapsuleDetail = (id: string) => {
  return apiClient.get<CapsuleDetailRes>(
    ENDPOINTS.CAPSULE_DETAIL.replace(":id", id),
  );
};

const getCapsuleLists = () => {
  return apiClient.get<CapsuleListsRes>(ENDPOINTS.CAPSULE_LISTS);
};
