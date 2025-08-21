import ky, { type Options as KyOptions, type ResponsePromise } from "ky";
import { HTTP_STATUS_CODE } from "@/shared/constants/api";
import { HTTPError } from "ky";
import { PATH } from "@/shared/constants/path";
import { ENDPOINTS } from "@/shared/constants/endpoints";

const API_BASE_URL =
  process.env.NODE_ENV === "development"
    ? "/"
    : process.env.NEXT_PUBLIC_API_BASE_URL;

const http = ky.create({
  prefixUrl: API_BASE_URL,
  timeout: 30_000,
  retry: 0,
  headers: {
    "Content-Type": "application/json",
  },
  credentials: "include",
  hooks: {
    beforeError: [
      async (error) => {
        if (error instanceof HTTPError) {
          const { response } = error;
          const url = error.request.url;

          if (url.includes(ENDPOINTS.USER_INFO)) {
            return error;
          }

          switch (response.status) {
            case HTTP_STATUS_CODE.UNAUTHORIZED: {
              window.location.replace(PATH.LOGIN);
              break;
            }
            case HTTP_STATUS_CODE.NOT_FOUND: {
              window.location.replace("/404");
              break;
            }
          }
        }
        return error;
      },
    ],
  },
});

async function parseResponse<T>(res: ResponsePromise): Promise<T> {
  return await res.json<T>();
}

export const apiClient = {
  get: <T>(pathname: string, options?: KyOptions) =>
    parseResponse<T>(http.get(pathname, options)),

  post: <T>(pathname: string, options?: KyOptions) =>
    parseResponse<T>(http.post(pathname, options)),

  put: <T>(pathname: string, options?: KyOptions) =>
    parseResponse<T>(http.put(pathname, options)),

  delete: <T>(pathname: string, options?: KyOptions) =>
    parseResponse<T>(http.delete(pathname, options)),

  patch: <T>(pathname: string, options?: KyOptions) =>
    parseResponse<T>(http.patch(pathname, options)),
};
