import { useState } from "react";

import HeartIcon from "@/shared/assets/icon/heart.svg";
import type { ComponentProps } from "react";
import * as styles from "./like-button.css";

interface LikeButtonProps extends ComponentProps<"button"> {
  isLiked: boolean;
  onLikeToggle?: (isLiked: boolean) => void;
}

const LikeButton = ({ isLiked, onLikeToggle, ...props }: LikeButtonProps) => {
  const [liked, setLiked] = useState(isLiked);

  const handleClick = () => {
    setLiked(!liked);
    onLikeToggle?.(liked);
  };

  return (
    <button
      className={styles.likeButton({ liked })}
      {...props}
      onClick={handleClick}
    >
      <HeartIcon width={24} />
    </button>
  );
};

export default LikeButton;
