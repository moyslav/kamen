import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kamen.ru"),
  title: {
    default: "KAMEN — натуральный камень для интерьеров и экстерьеров",
    template: "%s | KAMEN",
  },
  description:
    "Мрамор, гранит, кварцит, оникс, травертин. Собственный склад 5000+ м², резка под размер, монтаж под ключ. Доставка по Москве и РФ.",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "KAMEN",
    title: "KAMEN — натуральный камень для интерьеров и экстерьеров",
    description:
      "Мрамор, гранит, кварцит, оникс, травертин. Собственный склад 5000+ м², резка под размер, монтаж под ключ.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
