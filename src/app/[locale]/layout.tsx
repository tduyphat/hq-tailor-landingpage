import { Cabin } from "next/font/google";
import { notFound } from "next/navigation";
import { getMessages, setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

import "./globals.css";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { routing } from "@/i18n/routing";

export const metadata = {
  title: "HongQuang Tailor",
  description: "Landing page of HongQuang Tailor Shop",
};

const inter = Cabin({
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function RootLayout({
  children,
  params,
}: Readonly<Props>) {
  const messages = await getMessages();

  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  return (
    <html lang={locale} className={inter.className}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
