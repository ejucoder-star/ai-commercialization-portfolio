import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Commercialization Portfolio",
  description: "Trilingual (ZH/EN/JA) portfolio for an AI commercialization product manager.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  );
}
