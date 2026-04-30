import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { DockNavbar } from "@/components/ui/DockNavbar";

import { CustomCursor } from "@/components/ui/CustomCursor";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Premium Developer Portfolio",
  description: "A world-class, creative developer portfolio built with Next.js, Framer Motion, and Tailwind CSS.",
};

import { LoadingScreen } from "@/components/ui/LoadingScreen";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased selection:bg-purple-600 selection:text-white`}>
        <LoadingScreen />
        <GrainOverlay />
        <CustomCursor />
        <DockNavbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
