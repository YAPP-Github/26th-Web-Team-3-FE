import Providers from "@/app/providers";
import { pretendard } from "@/shared/styles/base/font";
import type { Metadata } from "next";
import type { ReactNode } from "react";

import "@/shared/styles/base/global.css";
import "@/shared/styles/base/reset.css";
import { globalLayout, rootStyle } from "@/shared/styles/base/global.css";
import { themeClass } from "@/shared/styles/base/theme.css";
import SprinkleContainer from "@/shared/ui/sprinkle-container";

// TODO: 추후 수정
export const metadata: Metadata = {
  title: "Lettie",
  description: "그룹 타임캡슐 웹 플랫폼",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.className} ${themeClass}`}>
      <body className={rootStyle}>
        <Providers>
          <div className={globalLayout}>{children}</div>
        </Providers>
        <SprinkleContainer />
      </body>
    </html>
  );
}
