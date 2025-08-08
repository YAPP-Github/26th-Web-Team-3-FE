export const ENDPOINTS = {
  // 타임캡슐
  CREATE_CAPSULE: "api/v1/capsules",
  CAPSULE_DETAIL: (id: string) => `api/v1/capsules/${id}`,
  CAPSULE_LISTS: (page = 0, size = 20, sort = ["id", "desc"], type = "all") =>
    `api/v1/capsules/explore?page=${page}&size=${size}&sort=${sort}${
      type === "all" ? "" : `&type=${type}`
    }`,
  LIKE_TOGGLE: (id: string) => `api/v1/capsules/${id}/like`,

  // 편지
  LETTER_LIST: (capsuleId: string, page = 0, size = 20) =>
    `api/v1/letters?capsuleId=${capsuleId}&page=${page}&size=${size}`,
  LETTER_DETAIL: (letterId: string) => `api/v1/letters/${letterId}`,
} as const;
