export interface UserInfo {
  result: {
    id: number;
    nickname: string;
    email: string;
  };
}

export interface TotalUserCountRes {
  result: {
    userTotalCount: number;
  };
}
