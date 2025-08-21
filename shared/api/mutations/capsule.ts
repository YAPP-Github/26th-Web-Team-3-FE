import { capsuleQueryKeys } from "@/shared/api/queries/capsule";
import { ENDPOINTS } from "@/shared/constants/endpoints";
import type {
  CreateCapsuleReq,
  CreateCapsuleRes,
} from "@/shared/types/api/capsule";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { apiClient } from "../api-client";

export const useCreateCapsule = () => {
  return useMutation({
    mutationFn: async (data: CreateCapsuleReq): Promise<CreateCapsuleRes> => {
      return await apiClient.post<CreateCapsuleRes>(ENDPOINTS.CREATE_CAPSULE, {
        json: data,
      });
    },
  });
};

export const useLikeToggle = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, isLiked }: { id: string; isLiked: boolean }) => {
      if (isLiked) {
        await apiClient.delete(ENDPOINTS.LIKE_TOGGLE(id));
      } else {
        await apiClient.put(ENDPOINTS.LIKE_TOGGLE(id));
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: capsuleQueryKeys.all() });
    },
  });
};

export const useLeaveCapsule = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => {
      return apiClient.delete(ENDPOINTS.LEAVE_CAPSULE(id));
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: capsuleQueryKeys.all() });
    },
  });
};
