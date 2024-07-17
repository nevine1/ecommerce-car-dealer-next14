import React from 'react'
import { Car } from '../types/page'
import Image from 'next/image'
import mainImage from '../../public/assets/imgs/hero.png';
import Img1 from '../../public/assets/imgs/steering-wheel.svg'
import { Transition } from '@headlessui/react';
interface carCardProps {
    car: Car; 
}

export const CarCard = ({car}: carCardProps) => {
    const { city_mpg, combination_mpg, cylinders, displacement,
        drive, fuel_type, highway_mpg, make, model, transmission, year} = car
    return (
        <div className="flex flex-col justify-center items-start bg-primary-blue-100 
            text-black-100 hover:bg-white hover:shadow-md rounded-xl group my-8 p-10">
             <div className="w-full flex justify-between items-start gap-2">
                <h2 className="text-[22px] leading-[26px] font-bold capitalize">{make} {model}</h2>
             </div>
           <p>
            <span>Car Rent ....</span>
           </p>
           <div className="h-40 relative w-full my-3 object-contain">
            <Image className="object-contain" src={mainImage}
                fill priority alt="main-image"
            />

           </div>
            <div className="relative flex w-full mt-2">
                <div className="flex group-hover:invisible w-full justify-between text-gray">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image src="../../public/assets/imgs/steering-wheel.svg" alt="image one"
                            width={20} height={20}
                        />
                        <p className="text-[14px] text-gray-600">
                            {transmission === `a`? "Automatic ": "Manual"}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
 