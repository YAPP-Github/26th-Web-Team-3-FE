import { ENDPOINTS } from "@/shared/constants/endpoints";
import type {
  CreateCapsuleReq,
  CreateCapsuleRes,
} from "@/shared/types/api/capsule";
import { mutationOptions } from "@tanstack/react-query";
import { apiClient } from "../api-client";

export const capsuleMutationKeys = {
  create: () => ["capsule-create"],
  like: () => ["capsule-like"],
  leave: () => ["capsule-leave"],
};

export const capsuleMutationOptions = {
  create: mutationOptions({
    mutationKey: capsuleMutationKeys.create(),
    mutationFn: async (data: CreateCapsuleReq): Promise<CreateCapsuleRes> => {
      return await apiClient.post<CreateCapsuleRes>(ENDPOINTS.CREATE_CAPSULE, {
        json: data,
      });
    },
  }),
  like: mutationOptions({
    mutationKey: capsuleMutationKeys.like(),
    mutationFn: async ({ id, isLiked }: { id: string; isLiked: boolean }) => {
      if (isLiked) {
        await apiClient.delete(ENDPOINTS.LIKE_TOGGLE(id));
      } else {
        await apiClient.put(ENDPOINTS.LIKE_TOGGLE(id));
      }
      return id;
    },
  }),
  leave: mutationOptions({
    mutationKey: capsuleMutationKeys.leave(),
    mutationFn: (id: string) => {
      return apiClient.delete(ENDPOINTS.LEAVE_CAPSULE(id));
    },
  }),
};
