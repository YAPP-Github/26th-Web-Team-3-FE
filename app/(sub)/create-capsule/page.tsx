"use client";
import { useFunnel } from "@/shared/hooks/use-funnel";
import NavbarDetail from "@/shared/ui/navbar/navbar-detail";
import PopupCancelCreation from "@/shared/ui/popup/popup-cancel-creation";
import { useSearchParams } from "next/navigation";
import { overlay } from "overlay-kit";
import CompleteStep from "./_components/steps/complete-step";
import DateStep from "./_components/steps/date-step";
import IntroStep from "./_components/steps/intro-step";
import PrivateStep from "./_components/steps/private-step";
import * as styles from "./page.css";

const CreateCapsule = () => {
  const { Funnel, Step, setStep } = useFunnel();
  const searchParams = useSearchParams();
  const currentStep = searchParams.get("step") || "intro";

  const handleNextStep = (newStep: string) => {
    setStep(newStep);
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
        <Funnel>
          <Step name="intro">
            <IntroStep handleNextStep={handleNextStep} />
          </Step>
          <Step name="date">
            <DateStep handleNextStep={handleNextStep} />
          </Step>
          <Step name="private">
            <PrivateStep handleNextStep={handleNextStep} />
          </Step>
          <Step name="complete">
            <CompleteStep />
          </Step>
        </Funnel>
      </div>
    </>
  );
};

export default CreateCapsule;
