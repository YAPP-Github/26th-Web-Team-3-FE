import type { ReactNode } from "react";

import NavbarMain from "@/shared/ui/navbar/navbar-main/navbar-main";

export default function MainLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
      <NavbarMain />
      {children}
    </div>
  );
}
