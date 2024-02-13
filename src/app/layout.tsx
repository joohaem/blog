import type { Metadata } from "next";
import localFont from "next/font/local";

import { GOOGLE_ANALYTICS, GOOGLE_VERIFICATION_CODE } from "@/consts/env";

import "./globals.css";
import { BASE_URL } from "./const";
import { bodyContainer } from "./layout.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: "SNUPI Blog",
  description: "",
  openGraph: {
    title: "SNUPI Blog",
    description: "SNUPI Blog",
    url: BASE_URL ?? undefined,
    type: "website",
  },
  verification: {
    google: GOOGLE_VERIFICATION_CODE ?? undefined
  }
};

const pretendardFont = localFont({
  src: [
    {
      path: "./fonts/Pretendard-ExtraLight.woff2",
      weight: "200",
    },
    {
      path: "./fonts/Pretendard-Light.woff2",
      weight: "300",
    },
    {
      path: "./fonts/Pretendard-Regular.woff2",
      weight: "400",
    },
    {
      path: "./fonts/Pretendard-Medium.woff2",
      weight: "500",
    },
    {
      path: "./fonts/Pretendard-SemiBold.woff2",
      weight: "600",
    },
    {
      path: "./fonts/Pretendard-Bold.woff2",
      weight: "700",
    },
  ],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${pretendardFont.className}`}>
      {
        GOOGLE_ANALYTICS 
        ? (
          <GoogleAnalytics gaId={GOOGLE_ANALYTICS} /> 
        ) 
        : null
      }
      <body className={bodyContainer}>{children}</body>
    </html>
  );
}
