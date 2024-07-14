import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./main.css";
import  Navbar from "../components/Navbar";
import  Footer from "../components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wonderfull cars",
  description: "We have what all you looking for ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
