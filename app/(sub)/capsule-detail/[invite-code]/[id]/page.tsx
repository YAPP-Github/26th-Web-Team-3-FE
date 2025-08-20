"use client";
import { useLikeToggle } from "@/shared/api/mutations/capsule";
import { capsuleQueryOptions } from "@/shared/api/queries/capsule";
import { userQueryOptions } from "@/shared/api/queries/user";
import MenuIcon from "@/shared/assets/icon/menu.svg";
import { PATH } from "@/shared/constants/path";
import Dropdown from "@/shared/ui/dropdown";
import InfoToast from "@/shared/ui/info-toast";
import LikeButton from "@/shared/ui/like-button";
import LoadingSpinner from "@/shared/ui/loading-spinner";
import RevealMotion from "@/shared/ui/motion/reveal-motion";
import NavbarDetail from "@/shared/ui/navbar/navbar-detail";
import PopupReport from "@/shared/ui/popup/popup-report";
import PopupWarningCapsule from "@/shared/ui/popup/popup-warning-capsule";
import { formatDateTime } from "@/shared/utils/date";
import { useQuery } from "@tanstack/react-query";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { overlay } from "overlay-kit";
import CapsuleImage from "../../_components/capsule-image";
import CaptionSection from "../../_components/caption-section";
import InfoTitle from "../../_components/info-title";
import OpenInfoSection from "../../_components/open-info-section";
import ResponsiveFooter from "../../_components/responsive-footer";
import { useLeaveCapsule } from "@/shared/api/mutations/capsule";
import * as styles from "./page.css";
import { oauthUtils } from "@/shared/utils/oauth";

const CapsuleDetailPage = () => {
  const params = useParams();
  const id = params.id as string;
  const { mutate: likeToggle } = useLikeToggle();
  const { data, isLoading, isError } = useQuery(
    capsuleQueryOptions.capsuleDetail(id),
  );
  const { data: user } = useQuery(userQueryOptions.userInfo());
  const { mutate: leaveCapsule } = useLeaveCapsule();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const isLoggedIn = !!user?.result;

  if (isLoading) {
    return <LoadingSpinner loading={true} size={20} />;
  }

  if (!data || isError) {
    return <div>캡슐 정보를 불러오지 못했습니다.</div>;
  }

  const { result } = data;

  const handleLikeToggle = (nextLiked: boolean) => {
    if (!isLoggedIn) {
      const current = oauthUtils.buildCurrentUrl(pathname, searchParams);
      oauthUtils.saveNextUrl(current);
      router.push(PATH.LOGIN);
      return;
    }
    likeToggle({ id: result.id.toString(), isLiked: nextLiked });
  };

  const handleLeaveCapsule = (close: () => void) => {
    close();
    leaveCapsule(result.id.toString(), {
      onSuccess: () => {
        router.push(PATH.EXPLORE);
      },
    });
  };

  return (
    <>
      <NavbarDetail
        renderRight={() => {
          return (
            <>
              <LikeButton
                isLiked={result.isLiked}
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
                  {result.isJoined && (
                    <Dropdown.Item
                      label="캡슐 떠나기"
                      className={styles.textHighlight}
                    onClick={() => {
                      overlay.open(({ isOpen, close }) => (
                        <PopupWarningCapsule
                          isOpen={isOpen}
                          close={close}
                          onConfirm={() => handleLeaveCapsule(close)}
                        />
                      ));
                      }}
                    />
                  )}
                </Dropdown.Content>
              </Dropdown>
            </>
          );
        }}
      />
      <RevealMotion>
        <InfoTitle
          title={result.title}
          participantCount={result.participantCount}
          joinLettersCount={result.letterCount}
        />
      </RevealMotion>
      <CapsuleImage imageUrl={result.beadVideoUrl} />
      <div className={styles.container}>
        <RevealMotion delay={0.8}>
          {result.subtitle && <CaptionSection description={result.subtitle} />}
        </RevealMotion>
        <RevealMotion delay={1.2}>
          <OpenInfoSection openAt={formatDateTime(result.openAt)} />
        </RevealMotion>
      </div>
      <ResponsiveFooter capsuleData={data} isLoggedIn={isLoggedIn} />
      {result.status !== "WRITABLE" && <InfoToast status={result.status} />}
    </>
  );
};

export default CapsuleDetailPage;
