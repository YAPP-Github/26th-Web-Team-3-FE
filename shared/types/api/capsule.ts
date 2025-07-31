export interface CapsuleDetailRes {
  result: {
    id: number;
    title: string;
    subtitle: string;
    openAt: string;
    participantCount: number;
    isLiked: boolean;
    status: string;
    remainingTime: {
      days: number;
      hours: number;
      minutes: number;
      seconds: number;
    };
  };
}

export interface CreateCapsuleReq {
  title: string;
  subtitle: string;
  accessType: "PUBLIC" | "PRIVATE";
  openAt: string;
  closeAt: string;
}

export interface CreateCapsuleRes {
  result: {
    id: number;
  };
}
