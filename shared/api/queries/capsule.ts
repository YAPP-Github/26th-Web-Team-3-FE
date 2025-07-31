import { queryOptions } from "@tanstack/react-query";

import { ENDPOINTS } from "@/shared/constants/endpoints";
import type { CapsuleDetailRes } from "@/shared/types/api/capsule";
import { apiClient } from "../api-client";

export const capsuleQueryKeys = {
  all: () => ["capsule"],
  detail: (id: string) => [...capsuleQueryKeys.all(), id],
};

export const capsuleQueryOptions = {
  capsuleDetail: (id: string) =>
    queryOptions({
      queryKey: capsuleQueryKeys.detail(id),
      queryFn: () => getCapsuleDetail(id),
      enabled: !!id,
    }),
};

const getCapsuleDetail = (id: string) => {
  return apiClient.get<CapsuleDetailRes>(
    ENDPOINTS.CAPSULE_DETAIL.replace(":id", id),
  );
};
