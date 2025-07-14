import type { ReactNode } from "react";

import NavHome from "@/shared/ui/nav-home/nav-home";

export default function MainLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
      <NavHome />
      {children}
    </div>
  );
}
