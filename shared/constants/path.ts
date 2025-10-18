export const PATH = {
  // Main
  HOME: "/",
  EXPLORE: "/explore",
  MY_CAPSULE: "/my-capsule",
  SETTING: "/setting",
  SEARCH: "/search",
  LOGIN: "/login",
  // capsule
  CREATE_CAPSULE: "/create-capsule",
  CAPSULE_DETAIL: (inviteCode: string, id: string) =>
    `/capsule-detail/${inviteCode}/${id}`,
  // sub pages
  TERMS: "/terms",
  PRIVACY: "/privacy",
} as const;
