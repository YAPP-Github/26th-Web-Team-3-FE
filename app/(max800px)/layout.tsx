import { maxLayout } from "@/shared/styles/base/global.css";
import type { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return <div className={maxLayout}>{children}</div>;
};

export default Layout;
