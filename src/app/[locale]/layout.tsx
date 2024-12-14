import { Cabin } from "next/font/google";
import { Charm } from "next/font/google";
import { Source_Sans_3 } from "next/font/google";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";

import "./globals.css";
import Footer from "../../components/layout/Footer";
import { routing } from "@/i18n/routing";
import Header from "@/components/layout/Header/index";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

const cabin = Cabin({
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

export const charm = Charm({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "700"],
  display: "swap",
});

export const sourceSans3 = Source_Sans_3({
  subsets: ["latin", "vietnamese"],
  weight: ['200', '300', '400'],
})

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const messages = await getMessages();

  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  return (
    <html lang={locale} className={cabin.className}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="min-h-screen mb-20">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
