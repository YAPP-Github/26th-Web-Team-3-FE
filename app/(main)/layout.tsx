import { maxWidth } from "@/shared/styles/base/global.css";
import NavbarMain from "@/shared/ui/navbar/navbar-main";
import type { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={maxWidth}>
      <NavbarMain />
      {children}
    </div>
  );
};

export default MainLayout;
