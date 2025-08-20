export interface CreateCapsuleReq {
  title: string;
  subtitle: string;
  accessType: "PUBLIC" | "PRIVATE";
  openAt: string;
  closedAt: string;
}

export interface CreateCapsuleRes {
  result: {
    id: number;
    inviteCode: string;
  };
}

export type CapsuleStatus = "WRITABLE" | "WAITING_OPEN" | "OPENED";

export interface CapsuleDetailRes {
  result: {
    id: number;
    title: string;
    subtitle: string;
    openAt: string;
    closedAt: string;
    participantCount: number;
    letterCount: number;
    likeCount: number;
    isLiked: boolean;
    isJoined: boolean;
    status: CapsuleStatus;
    remainingTime: {
      days: number;
      hours: number;
      minutes: number;
      openDate: string;
    };
    isMine: boolean;
    inviteCode: string;
    beadVideoUrl: string;
    isFirstOpen: boolean;
    accessType?: "PUBLIC" | "PRIVATE";
  };
}

export interface CapsuleListsRes {
  result: {
    timeCapsules: TimeCapsules[];
    totalCount: number;
    totalPages: number;
    pageNumber: number;
    pageSize: number;
  };
}

export type TimeCapsules = {
  id: number;
  inviteCode: string;
  title: string;
  participantCount: number;
  letterCount: number;
  remainingStatus: {
    type: CapsuleStatus;
    remainingTime: {
      days: number;
      hours: number;
      minutes: number;
      openDate: string | null;
    } | null;
    openDate: string | null;
    message: string | null;
  };
  accessType?: "PUBLIC" | "PRIVATE";
};

export const CAPSULE_SORT = {
  DEFAULT: "DEFAULT",
  LATEST: "LATEST",
  OPEN_IMMINENT: "OPEN_IMMINENT",
  WRITE_DEADLINE: "WRITE_DEADLINE",
} as const;

export type CapsuleSortType = (typeof CAPSULE_SORT)[keyof typeof CAPSULE_SORT];

export const MY_CAPSULE_FILTER = {
  ALL: "ALL",
  CREATED: "CREATED",
  LIKED: "LIKED",
  PARTICIPATING: "PARTICIPATING",
} as const;

export type MyCapsuleFilterType =
  (typeof MY_CAPSULE_FILTER)[keyof typeof MY_CAPSULE_FILTER];
