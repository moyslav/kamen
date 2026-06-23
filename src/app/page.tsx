import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "KAMEN — натуральный камень для интерьеров и экстерьеров",
  description:
    "Мрамор, гранит, кварцит, оникс, травертин, искусственный камень. Собственный склад 5000+ м², резка под размер, монтаж под ключ. Доставка по Москве и РФ.",
  openGraph: {
    title: "KAMEN — натуральный камень для интерьеров и экстерьеров",
    description:
      "Мрамор, гранит, кварцит, оникс, травертин. Собственный склад, резка под размер, монтаж. Доставка по РФ.",
  },
};

export default function HomePage() {
  return <HomeClient />;
}
