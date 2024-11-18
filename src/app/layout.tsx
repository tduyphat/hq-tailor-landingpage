import { Cabin } from "next/font/google";

import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export const metadata = {
  title: "HongQuangTailor",
  description: "An example app with persistent header and footer.",
};

const inter = Cabin({
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

export default function RootLayout({ children }: any) {
  return (
    <html lang="en" className={inter.className}>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
