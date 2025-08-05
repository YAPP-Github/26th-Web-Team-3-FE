export interface OAuthRes {
  result: {
    url: string;
  };
}

export interface OAuthCodeRes {
  result: {
    token: string;
    nickname: string;
  };
}
