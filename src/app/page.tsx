import Hero from "../components/Hero";
import Image from "next/image";
import  CarCatalogue  from '../components/CarCatalogue'


export default function Home() {
  return (
    <main>
      <Hero/>
      <CarCatalogue/>
    </main>
  );
}
