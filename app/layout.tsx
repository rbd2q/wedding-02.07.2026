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

const title = "Ваня и Ангелина — Свадьба 02.07.2026";
const description =
  "Приглашение на свадьбу. Дорогие родные и близкие, мы будем рады видеть вас среди наших гостей!";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined);

export const metadata: Metadata = {
  metadataBase: baseUrl ? new URL(baseUrl) : undefined,
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    images: [
      { url: "/images/footer.webp", width: 1200, height: 630, alt: title },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/footer.webp"],
  },
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
