import HeartIcon from "@/shared/assets/icon/heart.svg";
import type { ComponentProps } from "react";
import * as styles from "./like-button.css";

interface LikeButtonProps extends ComponentProps<"button"> {
  isLiked: boolean;
}

const LikeButton = ({ isLiked, ...props }: LikeButtonProps) => {
  return (
    <button className={styles.likeButton({ liked: isLiked })} {...props}>
      <HeartIcon width={24} />
    </button>
  );
};

export default LikeButton;
