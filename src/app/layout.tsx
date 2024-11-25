import { Cabin } from "next/font/google";

import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export const metadata = {
  title: "HongQuangTailor",
  description: "Landing page of HongQuang Tailor Shop",
};

const inter = Cabin({
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

export default function RootLayout({ children }: any) {
  return (
    <html className={inter.className}>
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
