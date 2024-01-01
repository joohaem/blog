import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";
import { BASE_URL } from "./const";

export const metadata: Metadata = {
  title: "SNUPI Blog",
  description: "",
  openGraph: {
    title: "SNUPI Blog",
    description: "SNUPI Blog",
    url: BASE_URL ?? undefined,
    type: "website",
  },
};

const pretendardFont = localFont({
  src: [
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

const robotoMonoFont = Roboto_Mono({
  display: "swap",
  subsets: ["latin", "latin-ext"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${pretendardFont.className} ${robotoMonoFont.className}`}
    >
      <body>{children}</body>
    </html>
  );
}
