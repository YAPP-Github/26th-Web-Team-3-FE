"use client";
import { capsuleMutationOptions } from "@/shared/api/mutations/capsule";
import { capsuleQueryOptions } from "@/shared/api/queries/capsule";
import { capsuleQueryKeys } from "@/shared/api/queries/capsule";
import { userQueryOptions } from "@/shared/api/queries/user";
import MenuIcon from "@/shared/assets/icon/menu.svg";
import { PATH } from "@/shared/constants/path";
import { useOverlay } from "@/shared/hooks/use-overlay";
import Dropdown from "@/shared/ui/dropdown";
import InfoToast from "@/shared/ui/info-toast";
import LikeButton from "@/shared/ui/like-button";
import LoadingSpinner from "@/shared/ui/loading-spinner";
import RevealMotion from "@/shared/ui/motion/reveal-motion";
import NavbarDetail from "@/shared/ui/navbar/navbar-detail";
import PopupReport from "@/shared/ui/popup/popup-report";
import PopupWarningCapsule from "@/shared/ui/popup/popup-warning-capsule";
import { formatDateTime } from "@/shared/utils/date";
import { oauthUtils } from "@/shared/utils/oauth";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import CapsuleImage from "../../_components/capsule-image";
import CaptionSection from "../../_components/caption-section";
import InfoTitle from "../../_components/info-title";
import OpenInfoSection from "../../_components/open-info-section";
import ResponsiveFooter from "../../_components/responsive-footer";
import * as styles from "./page.css";

const CapsuleDetailPage = () => {
  const params = useParams();
  const id = params.id as string;
  const queryClient = useQueryClient();
  const { data, isPending, isError } = useQuery(
    capsuleQueryOptions.capsuleDetail(id),
  );
  const { data: user } = useQuery(userQueryOptions.userInfo());
  const { mutate: likeToggle } = useMutation(capsuleMutationOptions.like);
  const { mutate: leaveCapsule } = useMutation(capsuleMutationOptions.leave);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { open } = useOverlay();

  const isLoggedIn = !!user?.result;

  if (isPending) {
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
    likeToggle(
      { id: result.id.toString(), isLiked: nextLiked },
      {
        onSuccess: () => async (id: string) => {
          await Promise.all([
            queryClient.invalidateQueries({
              queryKey: capsuleQueryKeys.detail(id),
            }),
            queryClient.invalidateQueries({ queryKey: ["capsule", "my"] }),
          ]);
        },
      },
    );
  };

  const handleLeaveCapsule = (close: () => void) => {
    close();
    leaveCapsule(result.id.toString(), {
      onSuccess: async () => {
        router.push(PATH.EXPLORE);
        await Promise.all([
          queryClient.invalidateQueries({
            queryKey: capsuleQueryKeys.detail(id),
          }),
          queryClient.invalidateQueries({ queryKey: ["capsule", "my"] }),
        ]);
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
                      open(({ isOpen, close }) => (
                        <PopupReport isOpen={isOpen} close={close} />
                      ));
                    }}
                  />
                  {result.isJoined && (
                    <Dropdown.Item
                      label="캡슐 떠나기"
                      className={styles.textHighlight}
                      onClick={() => {
                        open(({ isOpen, close }) => (
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
