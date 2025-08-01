"use client";

import MenuIcon from "@/shared/assets/icon/menu.svg";
import Dropdown from "@/shared/ui/dropdown";
import LikeButton from "@/shared/ui/like-button";
import RevealMotion from "@/shared/ui/motion/reveal-motion";
import NavbarDetail from "@/shared/ui/navbar/navbar-detail";
import CapsuleImage from "../_components/capsule-image";
import CaptionSection from "../_components/caption-section";
import InfoTitle from "../_components/info-title";
import OpenInfoSection from "../_components/open-info-section";
import ResponsiveFooter from "../_components/responsive-footer";

import { capsuleQueryOptions } from "@/shared/api/queries/capsule";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import * as styles from "./page.css";

const CapsuleDetailPage = () => {
  const params = useParams();
  const id = params.id as string;

  const { data } = useQuery(capsuleQueryOptions.capsuleDetail(id));

  return (
    <>
      <NavbarDetail
        renderRight={() => {
          return (
            <>
              <LikeButton isLiked={data?.result.isLiked || false} />
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
          title={data?.result.title || ""}
          participantCount={data?.result.participantCount || 0}
          joinLettersCount={data?.result.letterCount || 0}
        />
      </RevealMotion>
      <CapsuleImage />
      <div className={styles.container}>
        <RevealMotion delay={0.8}>
          <CaptionSection description={data?.result.subtitle || ""} />
        </RevealMotion>
        <RevealMotion delay={1.2}>
          <OpenInfoSection openAt={data?.result.openAt || ""} />
        </RevealMotion>
      </div>
      <ResponsiveFooter
        remainingTime={{
          days: data?.result.remainingTime.days || 0,
          hours: data?.result.remainingTime.hours || 0,
          minutes: data?.result.remainingTime.minutes || 0,
        }}
      />
    </>
  );
};

export default CapsuleDetailPage;
