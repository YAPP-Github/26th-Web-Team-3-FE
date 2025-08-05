import { apiClient } from "@/shared/api/api-client";
import type { OAuthCodeRes, OAuthRes } from "./auth.types";

const AUTH_ENDPOINTS = {
  NAVER_OAUTH: "api/v1/auth/oauth/naver",
  GOOGLE_OAUTH: "api/v1/auth/oauth/google",
  NAVER_CODE: "api/v1/auth/code/naver",
  GOOGLE_CODE: "api/v1/auth/code/google",
} as const;

export const getOAuthUrl = async (provider: "NAVER" | "GOOGLE") => {
  const response = await apiClient.get<OAuthRes>(
    AUTH_ENDPOINTS[`${provider}_OAUTH`],
  );
  return response.result.url;
};

export const getOAuthCode = async (
  provider: "NAVER" | "GOOGLE",
  code: string,
) => {
  const response = await apiClient.post<OAuthCodeRes>(
    AUTH_ENDPOINTS[`${provider}_CODE`],
    { json: { code: code } },
  );
  return response.result;
};
