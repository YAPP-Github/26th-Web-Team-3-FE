"use client";

import MenuIcon from "@/shared/assets/icon/menu.svg";
import Dropdown from "@/shared/ui/dropdown";
import LikeButton from "@/shared/ui/like-button";
import RevealMotion from "@/shared/ui/motion/reveal-motion";
import NavbarDetail from "@/shared/ui/navbar/navbar-detail";
import CapsuleImage from "../../_components/capsule-image";
import CaptionSection from "../../_components/caption-section";
import InfoTitle from "../../_components/info-title";
import OpenInfoSection from "../../_components/open-info-section";
import ResponsiveFooter from "../../_components/responsive-footer";

import { capsuleQueryOptions } from "@/shared/api/queries/capsule";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import * as styles from "./page.css";

const CapsuleDetailPage = () => {
  const params = useParams();
  const id = params.id as string;

  const { data, isLoading, isError } = useQuery(
    capsuleQueryOptions.capsuleDetail(id),
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || isError) {
    return <div>캡슐 정보를 불러오지 못했습니다.</div>;
  }

  return (
    <>
      <NavbarDetail
        renderRight={() => {
          return (
            <>
              <LikeButton isLiked={data?.result.isLiked} />
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
      <RevealMotion>
        <InfoTitle
          title={data?.result.title}
          participantCount={data?.result.participantCount}
          joinLettersCount={data?.result.letterCount}
        />
      </RevealMotion>
      <CapsuleImage />
      <div className={styles.container}>
        <RevealMotion delay={0.8}>
          <CaptionSection description={data?.result.subtitle} />
        </RevealMotion>
        <RevealMotion delay={1.2}>
          <OpenInfoSection openAt={data?.result.openAt} />
        </RevealMotion>
      </div>
      <ResponsiveFooter
        remainingTime={{
          days: data?.result.remainingTime.days,
          hours: data?.result.remainingTime.hours,
          minutes: data?.result.remainingTime.minutes,
          openDate: data?.result.remainingTime.openDate,
        }}
        status={data?.result.status}
        capsuleId={data?.result.id}
        isMine={data?.result.isMine}
      />
    </>
  );
};

export default CapsuleDetailPage;
