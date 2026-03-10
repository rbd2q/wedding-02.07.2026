import type { Metadata } from "next";
import "./globals.css";

import { Comme, Cormorant, Ibarra_Real_Nova } from "next/font/google";

const comme = Comme({
  subsets: ["latin"],
  variable: "--font-comme",
  display: "swap",
  weight: ["300", "500", "600"],
});

const cormorant = Cormorant({
  subsets: ["latin", "cyrillic"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["400", "600"],
});

const ibarraRealNova = Ibarra_Real_Nova({
  subsets: ["latin"],
  variable: "--font-ibarra",
  display: "swap",
  weight: ["600"],
});

export const metadata: Metadata = {
  title: "Ваня и Ангелина — Свадьба 02.07.2026",
  description:
    "Приглашение на свадьбу. Дорогие родные и близкие, мы будем рады видеть вас среди наших гостей!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${comme.variable} ${cormorant.variable} ${ibarraRealNova.variable}`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
