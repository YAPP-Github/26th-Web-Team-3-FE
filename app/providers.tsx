"use client";
import QueryProvider from "@/shared/providers/query-provider";
import { OverlayProvider } from "overlay-kit";
import type { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <QueryProvider>
      <OverlayProvider>{children}</OverlayProvider>
    </QueryProvider>
  );
};

export default Providers;
