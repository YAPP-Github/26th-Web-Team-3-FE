"use client";

import { capsuleQueryOptions } from "@/shared/api/queries/capsule";
import { letterQueryOptions } from "@/shared/api/queries/letter";
import Grid from "@/shared/assets/icon/grid.svg";
import Layers from "@/shared/assets/icon/layers.svg";
import Button from "@/shared/ui/button";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useState } from "react";
import GridLetterCard from "./_components/grid-letter-card";
import StackLetterCard from "./_components/stack-letter-card";
import * as styles from "./page.css";

const CapsuleLettersPage = () => {
  const params = useParams();
  const capsuleId = params.id as string;
  const [isStackType, setIsStackType] = useState(true);

  const { data: capsuleTitle } = useQuery({
    ...capsuleQueryOptions.capsuleDetail(capsuleId),
    select: (data) => data.result.title,
  });
  const { data: letterData, isLoading } = useQuery(
    letterQueryOptions.letterList(capsuleId),
  );

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  const letters = letterData?.result?.letters || [];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>{capsuleTitle || "캡슐"}</h1>
        <p className={styles.subtitle}>7월 참여 · {letters.length}통</p>
      </div>

      <div className={styles.cardContainer}>
        {letters.map((letter) =>
          isStackType ? (
            <StackLetterCard key={letter.letterId} letter={letter} />
          ) : (
            <GridLetterCard key={letter.letterId} letter={letter} />
          ),
        )}
      </div>

      <div className={styles.buttonContainer}>
        <Button
          variant={isStackType ? "primary" : "secondary"}
          text={isStackType ? "모아 보기" : ""}
          onClick={() => setIsStackType(true)}
          className={isStackType ? styles.button : styles.noneButton}
          icon={<Layers className={styles.svgIcon} />}
        />

        <Button
          variant={isStackType ? "secondary" : "primary"}
          text={isStackType ? "" : "펼쳐 보기"}
          onClick={() => setIsStackType(false)}
          className={isStackType ? styles.noneButton : styles.button}
          icon={<Grid className={styles.svgIcon} />}
        />
      </div>
    </div>
  );
};

export default CapsuleLettersPage;
