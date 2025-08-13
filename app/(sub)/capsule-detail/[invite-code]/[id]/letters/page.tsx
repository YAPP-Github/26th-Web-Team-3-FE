"use client";

import { capsuleQueryOptions } from "@/shared/api/queries/capsule";
import { letterQueryOptions } from "@/shared/api/queries/letter";
import Grid from "@/shared/assets/icon/grid.svg";
import Layers from "@/shared/assets/icon/layers.svg";
import { useLetterImages } from "@/shared/hooks/use-letter-images";
import { useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import GridLayout from "./_components/grid-layout";
import OpenCapsuleLoading from "./_components/open-capsule-loading";
import StackLayout from "./_components/stack-layout";
import * as styles from "./page.css";

const CapsuleLettersPage = () => {
  const params = useParams();
  const router = useRouter();
  const capsuleId = params.id as string;

  const [isStackType, setIsStackType] = useState(true);
  const [hasShownOpening, setHasShownOpening] = useState(false);

  const { data: capsuleData, isLoading: isCapsuleLoading } = useQuery({
    ...capsuleQueryOptions.capsuleDetail(capsuleId),
    select: (data) => ({
      title: data.result.title,
      participantCount: data.result.participantCount,
      isFirstOpen: data.result.isFirstOpen,
    }),
  });

  const { data: letterData, isLoading: isLetterLoading } = useQuery(letterQueryOptions.letterList(capsuleId));
  const letters = letterData?.result?.letters || [];
  const { imageUrls, isImageLoading } = useLetterImages(letters);

  const isLoading = isLetterLoading || isImageLoading || isCapsuleLoading;

  const handleLoadingComplete = () => {
    setHasShownOpening(true);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (capsuleData?.isFirstOpen && !hasShownOpening) {
    return (
      <OpenCapsuleLoading
        participantCount={capsuleData?.participantCount || 0}
        letterCount={letters.length}
        onComplete={handleLoadingComplete}
      />
    );
  }

  return (
    <div className={isStackType ? styles.stackContainer : styles.gridContainer}>
      <button className={styles.header} onClick={() => router.back()}>
        닫기
      </button>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>{capsuleData?.title || "캡슐"}</h1>
        <p className={styles.subtitle}>
          {capsuleData?.participantCount || 0}명 참여 · {letters.length}통
        </p>
      </div>

      <div className={styles.cardContainer}>
        {isStackType ? (
          <StackLayout letters={letters} imageUrls={imageUrls} />
        ) : (
          <GridLayout letters={letters} imageUrls={imageUrls} />
        )}
      </div>

      <div className={styles.buttonContainer}>
        <button
          onClick={() => setIsStackType(true)}
          className={isStackType ? styles.button : styles.noneButton}
          type="button"
        >
          <Layers className={styles.svgIcon} />
          {isStackType ? "모아 보기" : ""}
        </button>

        <button
          onClick={() => setIsStackType(false)}
          className={isStackType ? styles.noneButton : styles.button}
          type="button"
        >
          <Grid className={styles.svgIcon} />
          {isStackType ? "" : "펼쳐 보기"}
        </button>
      </div>
    </div>
  );
};

export default CapsuleLettersPage;
