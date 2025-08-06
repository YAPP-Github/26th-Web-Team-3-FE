import { apiClient } from "@/shared/api/api-client";
import type { OAuthCodeRes, OAuthRes } from "./auth.types";

const AUTH_ENDPOINTS = {
  OAUTH_URL: (provider: "naver" | "google") => `api/v1/auth/oauth/${provider}`,
  CODE: (provider: "naver" | "google") => `api/v1/auth/code/${provider}`,
} as const;

const AUTH_REDIRECT_URL = (provider: "naver" | "google") =>
  `http://localhost:3000/login/callback/${provider}`;

export const getOAuthUrl = async (provider: "naver" | "google") => {
  const response = await apiClient.get<OAuthRes>(
    AUTH_ENDPOINTS.OAUTH_URL(provider),
    {
      searchParams: {
        redirectUrl: AUTH_REDIRECT_URL(provider),
      },
    },
  );
  return response.result.url;
};

export const postToGetOAuthCode = async (
  provider: "naver" | "google",
  code: string,
) => {
  const response = await apiClient.post<OAuthCodeRes>(
    AUTH_ENDPOINTS.CODE(provider),
    {
      json: {
        authorizationCode: code,
        redirectUrl: AUTH_REDIRECT_URL(provider),
      },
    },
  );
  return response.result;
};
