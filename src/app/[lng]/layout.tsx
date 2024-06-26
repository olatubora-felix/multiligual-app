import { dir } from 'i18next'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import i18nConfig from '@/i18nConfig';
import LanguageChanger from '@/component/LanguageChanger';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ["latin"] });


export function generateStaticParams() {
  return i18nConfig.locales.map((locale: any) => ({ locale }));
}


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  params: {
    lng
  }
}: {
  children: React.ReactNode;
  params: {
    lng: string;
  };
}) {
  return (
    <html lang="ja" dir={dir(lng)}>
      <body className={inter.className}>
        <LanguageChanger />
        {children}
      </body>
    </html>
  );
}
interface IRootLayout {
  children: ReactNode;
  params: {
    locale: string;
  }
}