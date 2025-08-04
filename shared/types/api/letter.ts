export interface Letter {
  letterId: number;
  content: string;
  from: string;
  files: string;
  isMine: boolean;
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
