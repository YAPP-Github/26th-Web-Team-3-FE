import { fileQueryOptions } from "@/shared/api/queries/file";
import type { ImageUrl, Letter } from "@/shared/types/api/letter";
import { useQueries } from "@tanstack/react-query";
import { useMemo } from "react";

export const useLetterImages = (letters: Letter[]) => {
  const fileIds = useMemo(() => {
    return letters
      .filter((letter) => letter.files && letter.files.length > 0)
      .map((letter) => ({
        fileId: letter.files[0].fileId,
        letterId: letter.letterId,
      }));
  }, [letters]);

  const imageQueries = useQueries({
    queries: fileIds.map(({ fileId, letterId }) => {
      return fileQueryOptions.presignedUrl(fileId, letterId);
    }),
  });

  const isImageLoading = imageQueries.some((query) => query.isLoading);

  const imageUrls: ImageUrl[] = useMemo(() => {
    return imageQueries.map((query, index) => ({
      letterId: fileIds[index]?.letterId,
      fileId: fileIds[index]?.fileId,
      url: query.data?.presignedUrl || null,
    }));
  }, [imageQueries, fileIds]);

  return { imageUrls, isImageLoading };
};
