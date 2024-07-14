"use client"
import { useEffect } from "react";
import Hero from "../components/Hero";
import Image from "next/image";
import  CarCatalogue  from '../components/CarCatalogue'
import { fetchCars } from "../../utils/page";

export default function Home() {

  /* const allCars = await fetchCars();
  const dataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  console.log('allCars');
  console.log(allCars); */
  return (
    <main>
      <div className="flex justify-center items-center">
        <h1 className="text-xl text-primary-blue-400">Hello Cars</h1>
      </div>
      <Hero/>
      {/* {
        dataEmpty && (<>there is no cars</>)
      } */}
      <CarCatalogue/>
    </main>
  );
}
