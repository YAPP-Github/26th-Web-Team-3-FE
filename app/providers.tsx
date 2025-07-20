"use client";
import QueryProvider from "@/shared/providers/query-provider";
import { OverlayProvider } from "overlay-kit";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  if (!isClient) return null;

  return (
    <QueryProvider>
      <OverlayProvider>{children}</OverlayProvider>
    </QueryProvider>
  );
};

export default Providers;
