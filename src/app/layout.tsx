import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { i18n } from "@/lib/i18n-config";
import { dir } from "i18next";
import type { ReactNode } from "react";
import { AppProviders } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "آنلاین گروپ | سامانه مدیریت سفارشات",
  description: "سامانه مدیریت سفارشات آنلاین گروپ",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const locale = i18n.defaultLocale;

  return (
    <html lang={locale} dir={dir(locale)}>
      <body className={`${inter.className} antialiased bg-gray-50`}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return i18n.locales.map((lng) => ({ lng }));
}
