"use client";

import HeartIcon from "@/shared/assets/icon/heart.svg";
import type { ComponentProps } from "react";
import * as styles from "./like-button.css";

interface LikeButtonProps extends ComponentProps<"button"> {
  isFavorited: boolean;
}

const LikeButton = ({ isFavorited, ...props }: LikeButtonProps) => {
  return (
    <button className={styles.likeButton({ liked: isFavorited })} {...props}>
      <HeartIcon width={24} />
    </button>
  );
};

export default LikeButton;
