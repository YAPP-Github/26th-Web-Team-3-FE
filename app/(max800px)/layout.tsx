import { maxWidth } from "@/shared/styles/base/global.css";
import type { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return <div className={maxWidth}>{children}</div>;
};

export default Layout;
