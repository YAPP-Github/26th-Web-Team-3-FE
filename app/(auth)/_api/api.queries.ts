import { useMutation } from "@tanstack/react-query";
import { postToGetOAuthCode } from "./auth.api";

export const useSocialLogin = () => {
  return useMutation({
    mutationFn: ({
      provider,
      code,
    }: {
      provider: "naver" | "google";
      code: string;
    }) => postToGetOAuthCode(provider, code),
  });
};
