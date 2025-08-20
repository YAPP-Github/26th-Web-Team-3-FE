import type { ReactElement, ReactNode } from "react";
import { useState } from "react";

interface StepProps {
  name: string;
  children: ReactNode;
}

interface FunnelProps {
  children: ReactElement<StepProps>[];
}

export const useFunnel = () => {
  const [step, setStep] = useState("intro");

  const Step = ({ children }: StepProps) => {
    return <>{children}</>;
  };

  const Funnel = ({ children }: FunnelProps) => {
    const targetStep = children.find(
      (childStep) => childStep.props.name === step,
    );

    return <>{targetStep}</>;
  };

  return { Funnel, Step, setStep, step };
};
