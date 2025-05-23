import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import PageTransitionWrapper from "./components/animations/PageTransition";
import React from 'react'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mawen Salignat-Moandal",
  description: "Mawen Salignat-Moandal",
  icons: {
    icon: [
      {
        url: '/cube.svg',
        type: 'image/svg+xml',
      }
    ],
  },
};

const MemoizedSmoothCursor = React.memo(SmoothCursor)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PageTransitionWrapper>
          {/* <NavBar className="mb-20" /> */}
          {children}
          <MemoizedSmoothCursor />
        </PageTransitionWrapper>
      </body>
    </html>
  );
}
