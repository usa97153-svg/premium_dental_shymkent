import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Premium Dental 24/7 — Стоматология в Шымкенте",
  description:
    "Стоматологическая клиника Premium Dental 24/7 в Шымкенте. Круглосуточная работа, опытные врачи, принимаем ЕНПФ. Телефон: +7-775-350-03-04",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
