import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postLogin, postLogout } from "./auth.api";

export const useSocialLogin = () => {
  return useMutation({
    mutationFn: ({
      provider,
      code,
    }: {
      provider: "naver" | "google";
      code: string;
    }) => postLogin(provider, code),
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postLogout,
    onSuccess: () => {
      queryClient.clear();
    },
  });
};
