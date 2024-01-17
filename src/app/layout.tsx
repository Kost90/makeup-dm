import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const motserat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MakeUp Artist | Maria Dontsova",
  description: "Make Up",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={motserat.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
