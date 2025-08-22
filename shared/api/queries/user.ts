import { apiClient } from "@/shared/api/api-client";
import { ENDPOINTS } from "@/shared/constants/endpoints";
import type { UserInfo, TotalUserCountRes } from "@/shared/types/api/user";
import { queryOptions } from "@tanstack/react-query";
import { CACHE_TIME } from "@/shared/constants/api";

const userQueryKeys = {
  all: () => ["user"],
  userInfo: () => [...userQueryKeys.all(), "userInfo"],
  totalUserCount: () => [...userQueryKeys.all(), "totalUserCount"],
} as const;

export const userQueryOptions = {
  userInfo: (options?: {
    enabled?: boolean;
    onError?: (error: Error) => void;
  }) =>
    queryOptions({
      queryKey: userQueryKeys.userInfo(),
      queryFn: () => {
        return apiClient.get<UserInfo>(ENDPOINTS.USER_INFO);
      },
      ...options,
    }),

  totalUserCount: (options?: {
    enabled?: boolean;
    onError?: (error: Error) => void;
  }) =>
    queryOptions({
      queryKey: userQueryKeys.totalUserCount(),
      queryFn: () => {
        return apiClient.get<TotalUserCountRes>(ENDPOINTS.TOTAL_USER_COUNT);
      },
      ...options,
      staleTime: CACHE_TIME.LONG,
    }),
};
