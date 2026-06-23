import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import ThemeProvider from "@/components/ThemeProvider";

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
      suppressHydrationWarning
      className="h-full antialiased"
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var t = localStorage.getItem('theme');
                  if (t === 'dark' || (!t && matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
