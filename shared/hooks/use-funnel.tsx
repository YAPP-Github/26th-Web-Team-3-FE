import { useRouter, useSearchParams } from "next/navigation";
import type { ReactElement, ReactNode } from "react";
import { useEffect } from "react";

interface StepProps {
  name: string;
  children: ReactNode;
}

interface FunnelProps {
  children: ReactElement<StepProps>[];
}

export const useFunnel = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const step = searchParams.get("step") || "intro";

  useEffect(() => {
    if (!searchParams.get("step")) {
      const params = new URLSearchParams(searchParams);
      params.set("step", "intro");
      router.replace(`?${params.toString()}`);
    }
  }, [searchParams, router]);

  const setStep = (step: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("step", step);
    router.replace(`?${params.toString()}`);
  };

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
