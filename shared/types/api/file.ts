export interface FileRes {
  presignedUrl: string;
  objectKey: string;
  expiresAt: string;
}

export interface FileUploadReq {
  fileName: "LETTER" | "CAPSULE";
  extension: string;
  file: File;
}
