"use client";
import { useCreateCapsule } from "@/shared/api/mutations/use-create-capsule";
import { PATH } from "@/shared/constants/path";
import { useFunnel } from "@/shared/hooks/use-funnel";
import type { CreateCapsuleReq } from "@/shared/types/api/capsule";
import NavbarDetail from "@/shared/ui/navbar/navbar-detail";
import PopupCancelCreation from "@/shared/ui/popup/popup-cancel-creation";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { overlay } from "overlay-kit";
import { FormProvider, type SubmitHandler, useForm } from "react-hook-form";
import CompleteStep from "./_components/steps/complete-step";
import DateStep from "./_components/steps/date-step";
import IntroStep from "./_components/steps/intro-step";
import PrivateStep from "./_components/steps/privacy-step";

import * as styles from "./page.css";

const CreateCapsule = () => {
  const { Funnel, Step, setStep } = useFunnel();
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentStep = searchParams.get("step") || "intro";
  const { mutate: createCapsuleMutate } = useCreateCapsule();

  const form = useForm<CreateCapsuleReq>({
    defaultValues: {
      title: "",
      subtitle: "",
      accessType: "PUBLIC",
      openAt: "",
      closedAt: "",
    },
  });

  const handleNextStep = (newStep: string) => {
    setStep(newStep);
  };

  const onSubmit: SubmitHandler<CreateCapsuleReq> = (data) => {
    createCapsuleMutate(data, {
      onSuccess: (res) => {
        router.push(PATH.CAPSULE_DETAIL(res.result.id.toString()));
      },
    });
  };

  return (
    <>
      {currentStep !== "complete" && (
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
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <Funnel>
              <Step name="intro">
                <IntroStep handleNextStep={handleNextStep} />
              </Step>
              <Step name="date">
                <DateStep handleNextStep={handleNextStep} />
              </Step>
              <Step name="privacy">
                <PrivateStep handleNextStep={handleNextStep} />
              </Step>
              <Step name="complete">
                <CompleteStep />
              </Step>
            </Funnel>
          </form>
        </FormProvider>
      </div>
    </>
  );
};

export default CreateCapsule;
