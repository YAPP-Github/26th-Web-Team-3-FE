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

export type CapsuleStatus = "WRITABLE" | "WAITING_OPEN" | "OPENED";

export interface CapsuleDetailRes {
  result: {
    id: number;
    title: string;
    subtitle: string;
    openAt: string;
    participantCount: number;
    letterCount: number;
    likeCount: number;
    isLiked: boolean;
    status: "WRITABLE";
    remainingTime: {
      days: number;
      hours: number;
      minutes: number;
      openDate: string;
    };
    isMine: boolean;
    inviteCode: string;
  };
}
