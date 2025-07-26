"use client";

import MenuIcon from "@/shared/assets/icon/menu.svg";
import Dropdown from "@/shared/ui/dropdown";
import LikeButton from "@/shared/ui/like-button";
import NavbarDetail from "@/shared/ui/navbar/navbar-detail";
import CapsuleImage from "./_components/capsule-image";
import CaptionSection from "./_components/caption-section";
import InfoTitle from "./_components/info-title";
import OpenInfoSection from "./_components/open-info-section";
import ResponsiveFooter from "./_components/responsive-footer";
import * as styles from "./page.css";

const CapsuleDetailPage = () => {
  return (
    <div>
      <NavbarDetail
        renderRight={() => {
          return (
            <>
              <LikeButton isLiked={false} />
              <Dropdown>
                <Dropdown.Trigger>
                  <MenuIcon />
                </Dropdown.Trigger>
                <Dropdown.Content>
                  <Dropdown.Item label="신고하기" />
                  <Dropdown.Item label="나가기" />
                </Dropdown.Content>
              </Dropdown>
            </>
          );
        }}
      />
      <InfoTitle
        title="비 오는 날의 타임캡슐"
        participantCount={8}
        joinLettersCount={33}
      />
      <CapsuleImage />
      <div className={styles.container}>
        <CaptionSection description="오늘처럼 비 오는 날에만 꺼내보고 싶은 이야기, 혹은 아무에게도 말하지 못했던 감정이 있다면 이곳에 슬며시 적어주세요." />
        <OpenInfoSection openAt="2025-07-01-13:00" />
      </div>
      <ResponsiveFooter
        remainingTime={{
          days: 2,
          hours: 10,
          minutes: 10,
        }}
      />
    </div>
  );
};

export default CapsuleDetailPage;
