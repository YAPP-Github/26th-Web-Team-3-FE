export const PATH = {
  // Main
  HOME: "/",
  EXPLORE: "/explore",
  MY_CAPSULE: "/my-capsule",
  SETTING: "/setting",
  SEARCH: "/search",

  // capsule
  CREATE_CAPSULE: "/create-capsule",
  CAPSULE_DETAIL: (inviteCode: string, id: string) =>
    `/capsule-detail/${inviteCode}/${id}`,
} as const;
