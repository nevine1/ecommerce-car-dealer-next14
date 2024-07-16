"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./main.css";
import  Navbar from "../components/Navbar";
import  Footer from "../components/Footer";
import  store  from '../store/store';
import { Provider } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

/* export const metadata: Metadata = {
  title: "Wonderfull cars",
  description: "We have what all you looking for ",
}; */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Provider store={store}>
          <Navbar/>
          {children}
          <Footer/>
        </Provider>
        </body>
    </html>
  );
}
