import { ENDPOINTS } from "@/shared/constants/endpoints";
import type {
  CreateCapsuleReq,
  CreateCapsuleRes,
} from "@/shared/types/api/capsule";
import { useMutation } from "@tanstack/react-query";
import { apiClient } from "../api-client";

export const useCreateCapsule = () => {
  return useMutation({
    mutationFn: async (data: CreateCapsuleReq): Promise<CreateCapsuleRes> =>
      await apiClient.post<CreateCapsuleRes>(ENDPOINTS.CREATE_CAPSULE, {
        json: data,
        auth: true,
      }),
  });
};
