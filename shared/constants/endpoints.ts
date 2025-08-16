import type { CapsuleSortType } from "@/shared/types/api/capsule";

export const ENDPOINTS = {
  // 타임캡슐
  CREATE_CAPSULE: "api/v1/capsules",
  CAPSULE_DETAIL: (id: string) => `api/v1/capsules/${id}`,
  CAPSULE_LISTS: (
    page = 0,
    size = 20,
    sort: CapsuleSortType = "DEFAULT",
    type = "all",
  ) =>
    `api/v1/capsules/explore?page=${page}&size=${size}&sort=${sort}${
      type === "all" ? "" : `&type=${type}`
    }`,

  LIKE_TOGGLE: (id: string) => `api/v1/capsules/${id}/like`,

  MY_CAPSULE_LIST: (
    page = 0,
    size = 20,
    sort: CapsuleSortType = "DEFAULT",
    filter = "ALL",
  ) =>
    `api/v1/capsules/my?page=${page}&size=${size}&sort=${sort}&filter=${filter}`,

  USER_INFO: "api/v1/users/my-info",

  // 편지
  WRITE_LETTER: "api/v1/letters",
  LETTER_LIST: (capsuleId: string, page = 0, size = 20) =>
    `api/v1/letters?capsuleId=${capsuleId}&page=${page}&size=${size}`,
  LETTER_DETAIL: (letterId: string) => `api/v1/letters/${letterId}`,

  // 파일
  PRESIGNED_URL: (fileId: string) => `api/v1/files/${fileId}/presigned-url`,
  UPLOAD_FILE: (fileName: string, extension: string) =>
    `api/v1/files/presigned-url?fileName=${fileName}&extension=${extension}`,
} as const;
