export interface OAuthRes {
  result: {
    url: string;
  };
}

export interface OAuthCodeRes {
  result: {
    nickname: string;
    success: boolean;
  };
}

export interface LogoutRes {
  result: boolean;
}
