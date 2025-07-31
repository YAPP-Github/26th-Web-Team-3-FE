import { ENDPOINTS } from "@/shared/constants/endpoints";
import type {
  CreateCapsuleReq,
  CreateCapsuleRes,
} from "@/shared/types/api/capsule";
import { useMutation } from "@tanstack/react-query";
import { apiClient } from "../api-client";

export const useCreateCapsule = () => {
  return useMutation({
    mutationFn: async (data: CreateCapsuleReq): Promise<CreateCapsuleRes> => {
      return await apiClient.post<CreateCapsuleRes>(ENDPOINTS.CREATE_CAPSULE, {
        json: data,
        auth: true,
      });
    },
    onError: (err) => {
      console.error("에러 발생:", err);
    },
  });
};
