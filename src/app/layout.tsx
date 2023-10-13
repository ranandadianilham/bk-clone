import './globals.css'
import { Inter } from 'next/font/google'
import Header from "./_components/Layout/Header";
import Footer from "./_components/Layout/Footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BK',
  description: 'BK clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
       {/*  <Footer /> */}
        </body>
    </html>
  )
}
