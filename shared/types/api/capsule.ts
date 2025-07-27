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
