import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { dir } from "i18next";
import { i18n } from "@/lib/i18n-config";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "آنلاین گروپ | سامانه مدیریت سفارشات",
  description: "سامانه مدیریت سفارشات آنلاین گروپ",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={i18n.language} dir={dir(i18n.language)}>
      <body className={`${inter.className} antialiased bg-gray-50`}>
        {children}
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return i18n.locales.map((lng) => ({ lng }));
}
