"use client";
import { useCreateCapsule } from "@/shared/api/mutations/capsule";
import { Suspense, useState } from "react";

import CreateCapsuleLoading from "@/app/(sub)/create-capsule/_components/create-capsule-loading";
import { useFunnel } from "@/shared/hooks/use-funnel";
import type { CreateCapsuleReq } from "@/shared/types/api/capsule";
import NavbarDetail from "@/shared/ui/navbar/navbar-detail";
import PopupCancelCreation from "@/shared/ui/popup/popup-cancel-creation";
import { createISOString, getDate } from "@/shared/utils/date";
import { overlay } from "overlay-kit";
import { FormProvider, type SubmitHandler, useForm } from "react-hook-form";
import CompleteStep from "./_components/steps/complete-step";
import DateStep from "./_components/steps/date-step";
import IntroStep from "./_components/steps/intro-step";
import PrivateStep from "./_components/steps/privacy-step";
import * as styles from "./page.css";

type CreateCapsuleForm = {
  title: string;
  subtitle: string;
  accessType: "PUBLIC" | "PRIVATE";
  openDate: string; // YYYY-MM-DD
  openTime: string; // HH:mm
  closedAt: string; // YYYY-MM-DD
};

interface CapsuleInfo {
  id: number;
  inviteCode: string;
}

const CreateCapsule = () => {
  const { Funnel, Step, setStep, step } = useFunnel();
  const [capsuleInfo, setCapsuleInfo] = useState<CapsuleInfo | null>(null);

  const { mutate: createCapsuleMutate, isPending } = useCreateCapsule();

  const defaultOpenDate = getDate(14);
  const defaultClosedAt = getDate(10);

  const form = useForm<CreateCapsuleForm>({
    defaultValues: {
      title: "",
      subtitle: "",
      accessType: "PUBLIC",
      openDate: defaultOpenDate,
      openTime: "19:00",
      closedAt: defaultClosedAt,
    },
  });

  const handleNextStep = (newStep: string) => {
    setStep(newStep);
  };

  const onSubmit: SubmitHandler<CreateCapsuleForm> = (data) => {
    // 서버에서 요구하는 형식대로 제출 직전에 변환
    const payload: CreateCapsuleReq = {
      title: data.title,
      subtitle: data.subtitle,
      accessType: data.accessType,
      openAt: createISOString(data.openDate, `${data.openTime}:00`),
      closedAt: createISOString(data.closedAt, "19:00:00"),
    };

    createCapsuleMutate(payload, {
      onSuccess: (res) => {
        setCapsuleInfo({
          id: res.result.id,
          inviteCode: res.result.inviteCode,
        });
        setStep("complete");
      },
    });
  };

  if (isPending) {
    return <CreateCapsuleLoading />;
  }

  return (
    <>
      {step !== "complete" && (
        <NavbarDetail
          renderRight={() => (
            <button
              className={styles.closeButton}
              onClick={() =>
                overlay.open(({ isOpen, close }) => (
                  <PopupCancelCreation isOpen={isOpen} close={close} />
                ))
              }
            >
              닫기
            </button>
          )}
        />
      )}
      <div className={styles.container}>
        <FormProvider {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className={styles.formStyle}
          >
            <Funnel>
              <Step name="intro">
                <IntroStep handleNextStep={handleNextStep} />
              </Step>
              <Step name="date">
                <DateStep handleNextStep={handleNextStep} />
              </Step>
              <Step name="privacy">
                <PrivateStep />
              </Step>
              <Step name="complete">
                {capsuleInfo && <CompleteStep capsuleInfo={capsuleInfo} />}
              </Step>
            </Funnel>
          </form>
        </FormProvider>
      </div>
    </>
  );
};

export default function Page() {
  return (
    <Suspense fallback={<div>로딩중...</div>}>
      <CreateCapsule />
    </Suspense>
  );
}
