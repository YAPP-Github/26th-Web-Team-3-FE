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
  };
}

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
    status: "WRITABLE" | "WAITING_OPEN" | "OPENED";
    remainingTime: {
      days: number;
      hours: number;
      minutes: number;
      openDate: string;
    };
    isMine: boolean;
    inviteCode: string;
    beadVideoUrl: string;
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
  title: string;
  participantCount: number;
  letterCount: number;
  remainingStatus: {
    type: "OPENED" | "WRITABLE" | "WAITING_OPEN";
    remainingTime: {
      days: number;
      hours: number;
      minutes: number;
      openDate: string | null;
    } | null;
    openDate: string | null;
    message: string | null;
  };
};
