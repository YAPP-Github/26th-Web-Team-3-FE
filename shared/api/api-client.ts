import ky, { type Options as KyOptions, type ResponsePromise } from "ky";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const http = ky.create({
  prefixUrl: API_BASE_URL,
  timeout: 30_000,
  retry: 0,
  headers: {
    "Content-Type": "application/json",
  },
  credentials: "include",
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
