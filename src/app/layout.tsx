import type { Metadata } from "next";
import localFont from "next/font/local";
import { Source_Serif_4 } from "next/font/google";
import clsx from "clsx";

import GoogleAnalytics from "@/components/GoogleAnalytics";
import { GOOGLE_ANALYTICS, GOOGLE_VERIFICATION_CODE } from "@/consts/env";

import "./globals.css";
import { BASE_URL } from "./const";
import { bodyContainer } from "./layout.css";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL ?? ""),
  title: "SNUPI Blog",
  description: "",
  openGraph: {
    title: "SNUPI Blog",
    description: "SNUPI Blog",
    url: BASE_URL ?? undefined,
    type: "website",
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: false,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: GOOGLE_VERIFICATION_CODE ?? undefined,
  },
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

const sourceSerif4Font = Source_Serif_4({
  weight: ["200", "300", "400"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-source-serif-4",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(pretendardFont.className, sourceSerif4Font.variable)}
    >
      {GOOGLE_ANALYTICS ? <GoogleAnalytics gaId={GOOGLE_ANALYTICS} /> : null}
      <body className={bodyContainer}>{children}</body>
    </html>
  );
}
