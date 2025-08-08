"use client";
import { useLikeToggle } from "@/shared/api/mutations/capsule";
import { capsuleQueryOptions } from "@/shared/api/queries/capsule";
import MenuIcon from "@/shared/assets/icon/menu.svg";
import { PATH } from "@/shared/constants/path";
import Dropdown from "@/shared/ui/dropdown";
import InfoToast from "@/shared/ui/info-toast";
import LikeButton from "@/shared/ui/like-button";
import RevealMotion from "@/shared/ui/motion/reveal-motion";
import NavbarDetail from "@/shared/ui/navbar/navbar-detail";
import PopupReport from "@/shared/ui/popup/popup-report";
import { formatDateTime } from "@/shared/utils/date";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useParams } from "next/navigation";
import { overlay } from "overlay-kit";
import CapsuleImage from "../../_components/capsule-image";
import CaptionSection from "../../_components/caption-section";
import InfoTitle from "../../_components/info-title";
import OpenInfoSection from "../../_components/open-info-section";
import ResponsiveFooter from "../../_components/responsive-footer";
import * as styles from "./page.css";

const CapsuleDetailPage = () => {
  const params = useParams();
  const id = params.id as string;
  const { mutate: likeToggle } = useLikeToggle();
  const { data, isLoading, isError } = useQuery(
    capsuleQueryOptions.capsuleDetail(id),
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || isError) {
    return <div>캡슐 정보를 불러오지 못했습니다.</div>;
  }

  const handleLikeToggle = (isLiked: boolean) => {
    likeToggle({ id: data.result.id.toString(), isLiked });
  };

  return (
    <>
      <NavbarDetail
        renderRight={() => {
          return (
            <>
              <LikeButton
                isLiked={data?.result.isLiked}
                onLikeToggle={(prev) => handleLikeToggle(!prev)}
              />
              <Dropdown>
                <Dropdown.Trigger>
                  <MenuIcon />
                </Dropdown.Trigger>
                <Dropdown.Content>
                  <Dropdown.Item
                    label="신고하기"
                    onClick={() => {
                      overlay.open(({ isOpen, close }) => (
                        <PopupReport isOpen={isOpen} close={close} />
                      ));
                    }}
                  />
                  <Link href={PATH.HOME}>
                    <Dropdown.Item label="나가기" />
                  </Link>
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
      <CapsuleImage imageUrl={data?.result.beadVideoUrl} />
      <div className={styles.container}>
        <RevealMotion delay={0.8}>
          <CaptionSection description={data?.result.subtitle} />
        </RevealMotion>
        <RevealMotion delay={1.2}>
          <OpenInfoSection openAt={formatDateTime(data?.result.openAt)} />
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
        isMine={data?.result.isMine}
      />
      {data.result.status !== "WRITABLE" && (
        <InfoToast status={data.result.status as "WAITING_OPEN" | "OPENED"} />
      )}
    </>
  );
};

export default CapsuleDetailPage;
