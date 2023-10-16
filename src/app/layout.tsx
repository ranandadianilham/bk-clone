import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./_components/Layout/Header";
import "react-datepicker/dist/react-datepicker.css";
import Footer from "./_components/Layout/Footer";
import { Metadata } from "next";
import { ContextWrapper } from "./_hooks/menuContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BK",
  description: "BK clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <ContextWrapper>
          <Header />
          {children}
          <Footer />
        </ContextWrapper>
      </body>
    </html>
  );
}
