"use client"
import { useEffect } from "react";
import Hero from "../components/Hero";
import Image from "next/image";
import  CarCatalogue  from '../components/CarCatalogue';
export default function Home() {
  

  return (
    <main>
      <div className="flex justify-center items-center">
        <h1 className="text-xl text-primary-blue-400">Hello Cars</h1>
      </div>
      <Hero/>
    
      <CarCatalogue/>
    </main>
  );
}
