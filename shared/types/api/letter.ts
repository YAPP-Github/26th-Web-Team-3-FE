export interface Letter {
  letterId: number;
  content: string;
  from: string;
  files: {
    fileId: string;
    objectKey: string;
  }[];
  isMine: boolean;
}

export interface ImageUrl {
  letterId: number;
  fileId: string;
  url: string | null;
}

export interface LetterDetailRes {
  result: Letter;
}

export interface LetterListRes {
  result: {
    letters: Letter[];
    size: number;
    totalPages: number;
    page: number;
    totalElements: number;
  };
}

export interface WriteLetterReq {
  capsuleId: string;
  content: string;
  objectKeys: string;
  from: string;
}
