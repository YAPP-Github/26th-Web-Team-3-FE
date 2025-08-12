import { apiClient } from "@/shared/api/api-client";
import type { LogoutRes, OAuthCodeRes, OAuthRes } from "./auth.types";

const AUTH_ENDPOINTS = {
  OAUTH_URL: (provider: "naver" | "google") => `api/v1/auth/oauth/${provider}`,
  LOGIN: (provider: "naver" | "google") => `api/v1/auth/code/${provider}`,
  LOGOUT: "api/v1/auth/logout",
} as const;

const AUTH_REDIRECT_URL = (provider: "naver" | "google") =>
  `${process.env.NEXT_PUBLIC_REDIRECT_URL}/${provider}`;

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

export const postLogin = async (provider: "naver" | "google", code: string) => {
  const response = await apiClient.post<OAuthCodeRes>(
    AUTH_ENDPOINTS.LOGIN(provider),
    {
      json: {
        authorizationCode: code,
        redirectUrl: AUTH_REDIRECT_URL(provider),
      },
    },
  );
  return response.result;
};

export const postLogout = async () => {
  const response = await apiClient.post<LogoutRes>(AUTH_ENDPOINTS.LOGOUT);
  return response.result;
};
