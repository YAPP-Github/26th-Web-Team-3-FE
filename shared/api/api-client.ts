import ky, { type Options as KyOptions, type ResponsePromise } from "ky";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const MASTER_TOKEN = process.env.NEXT_PUBLIC_MASTER_TOKEN;

const defaultOption = {
  prefixUrl: API_BASE_URL,
  timeout: 30_000,
  retry: 0,
  headers: {
    "Content-Type": "application/json",
  },
};

// 기본 ky 인스턴스 (인증 X)
const http = ky.create(defaultOption);

// 인증 ky 인스턴스
const authHttp = http.extend({
  hooks: {
    beforeRequest: [
      (request) => {
        // Todo: 추후 토큰 저장소에서 가져오도록 수정
        const token = MASTER_TOKEN;
        if (token) {
          request.headers.set("Authorization", `Bearer ${token}`);
        }
      },
    ],
  },
});

// auth 옵션을 추가한 타입
type ExtendedOptions = KyOptions & {
  auth?: boolean;
};

// 응답 파싱 함수
async function parseResponse<T>(res: ResponsePromise): Promise<T> {
  return await res.json<T>();
}

// auth 옵션에 따라 인스턴스 선택
function selectClient(options?: ExtendedOptions) {
  return options?.auth ? authHttp : http;
}

/**
 * API 클라이언트 객체
 * HTTP 메서드들을 제공하며, 인증이 필요한 요청의 경우 auth 옵션을 사용할 수 있습니다.
 */
export const apiClient = {
  /**
   * @param pathname - 요청할 엔드포인트 경로
   * @param options - HTTP 요청 옵션 (auth 포함)
   * @returns 응답 데이터
   * @example
   * ```typescript
   * // 인증 없이 요청
   * const data = await apiClient.get<User[]>('/users');
   *
   * // 인증과 함께 요청
   * const profile = await apiClient.get<UserProfile>('/profile', { auth: true });
   * ```
   */
  get: <T>(pathname: string, options?: ExtendedOptions) =>
    parseResponse<T>(selectClient(options).get(pathname, options)),

  post: <T>(pathname: string, options?: ExtendedOptions) =>
    parseResponse<T>(selectClient(options).post(pathname, options)),

  put: <T>(pathname: string, options?: ExtendedOptions) =>
    parseResponse<T>(selectClient(options).put(pathname, options)),

  delete: <T>(pathname: string, options?: ExtendedOptions) =>
    parseResponse<T>(selectClient(options).delete(pathname, options)),

  patch: <T>(pathname: string, options?: ExtendedOptions) =>
    parseResponse<T>(selectClient(options).patch(pathname, options)),
};
