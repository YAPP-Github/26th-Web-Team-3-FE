export const ENDPOINTS = {
  // 타임캡슐
  CREATE_CAPSULE: "api/v1/capsules",
  CAPSULE_DETAIL: (id: string) => `api/v1/capsules/${id}`,
  CAPSULE_LISTS: "api/v1/capsules/explore",
  // 편지
  LETTER_LIST: (capsuleId: string, page = 0, size = 20) =>
    `api/v1/letters?capsuleId=${capsuleId}&page=${page}&size=${size}`,
  LETTER_DETAIL: (letterId: string) => `api/v1/letters/${letterId}`,
} as const;
