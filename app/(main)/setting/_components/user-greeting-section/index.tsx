"use client";

import * as styles from "./user-greeting-section.css";

interface UserGreetingSectionProps {
  userName: string;
}

const UserGreetingSection = ({ userName }: UserGreetingSectionProps) => {
  return (
    <div className={styles.userGreetingSection}>
      <h1>{userName}님, 안녕하세요!</h1>
    </div>
  );
};

export default UserGreetingSection;
