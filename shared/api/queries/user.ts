import { apiClient } from "@/shared/api/api-client";
import { ENDPOINTS } from "@/shared/constants/endpoints";
import type { UserInfo } from "@/shared/types/api/user";
import { queryOptions } from "@tanstack/react-query";

const userQueryKeys = {
  all: () => ["user"],
  userInfo: () => [...userQueryKeys.all(), "userInfo"],
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
};
