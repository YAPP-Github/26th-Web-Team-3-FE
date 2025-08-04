import ky, { type Options as KyOptions, type ResponsePromise } from "ky";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const defaultOption = {
  prefixUrl: API_BASE_URL,
  timeout: 30_000,
  retry: 0,
  headers: {
    "Content-Type": "application/json",
  },
};

const http = ky.create({
  ...defaultOption,
  hooks: {
    beforeRequest: [
      (request) => {
        // 임시: 로컬스토리지에서 수동으로 넣은 토큰 가져오기
        const token = localStorage.getItem("accessToken");
        if (token) {
          request.headers.set("Authorization", `Bearer ${token}`);
        }
      },
    ],
  },
});

type ExtendedOptions = KyOptions & {
  auth?: boolean;
};

async function parseResponse<T>(res: ResponsePromise): Promise<T> {
  return await res.json<T>();
}

export const apiClient = {
  get: <T>(pathname: string, options?: ExtendedOptions) =>
    parseResponse<T>(http.get(pathname, options)),

  post: <T>(pathname: string, options?: ExtendedOptions) =>
    parseResponse<T>(http.post(pathname, options)),

  put: <T>(pathname: string, options?: ExtendedOptions) =>
    parseResponse<T>(http.put(pathname, options)),

  delete: <T>(pathname: string, options?: ExtendedOptions) =>
    parseResponse<T>(http.delete(pathname, options)),

  patch: <T>(pathname: string, options?: ExtendedOptions) =>
    parseResponse<T>(http.patch(pathname, options)),
};
