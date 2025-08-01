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
  };
}

export interface PopularCapsuleRes {
  result: CapsuleInfo[];
}

export type CapsuleInfo = {
  id: number;
  title: string;
  participantCount: number;
  letterCount: number;
  remainingStatus: WRITABLEStatus | OPENEDStatus;
};

type BaseStatus<Type extends string> = {
  type: Type;
  openDate: string | null;
  message: string | null;
  remainingTime: {
    days: number;
    hours: number;
    minutes: number;
    openDate: string | null;
  } | null;
};

export type WRITABLEStatus = BaseStatus<"WRITABLE" | "WAITING_OPEN">;
export type OPENEDStatus = BaseStatus<"OPENED">;
