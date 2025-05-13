import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import NavBar from "@/app/components/ui/NavBar";
import Clock from "./components/Clock";
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
};

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
        
        {children}
        <SmoothCursor />
      </body>
    </html>
  );
}
