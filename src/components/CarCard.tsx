import { useState } from 'react'
import { Car } from '../types/page'
import Image from 'next/image'
import mainImage from '../../public/assets/imgs/hero.png';
import Img1 from '../../public/assets/imgs/steering-wheel.svg'
import Steering from '../../public/assets/imgs/steering-wheel.svg'
import Tire from '../../public/assets/imgs/tire.svg'
import Gas from '../../public/assets/imgs/gas.svg'
import CustomButton from './customComponents/CustomButton';
import { CarDetails } from './customComponents/CarDetails';
interface carCardProps {
    car: Car; 
    isOPen:boolean;
    closeModal: () => void; 
}

export const CarCard = ({car, isOPen}: carCardProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const { city_mpg, combination_mpg, cylinders, displacement,
        drive, fuel_type, highway_mpg, make, model, transmission, year} = car
    return (
        <div className="flex flex-col justify-center items-start bg-primary-blue-100 
            text-black-100 hover:bg-white hover:shadow-md rounded-xl group my-2 p-8">
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
                <div className="flex  mx-5 w-full justify-between text-gray">
                    <div className="flex flex-col justify-center items-center gap-5">
                        <Image src={Steering} alt="image one"
                            width={20} height={20}
                        />
                        <p className="text-[14px] text-gray-600">
                            {transmission === `a`? "Automatic ": "Manual"}
                        </p>
                    </div>
                </div>

                <div className="flex  w-full justify-between text-gray">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image src={Tire} alt="image one"
                            width={20} height={20}
                        />
                        <p className="text-[14px] text-gray-600">
                            {drive.toUpperCase()}
                        </p>
                    </div>
                </div>

                <div className="flex w-full justify-between text-gray">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image src={Gas} alt="image one"
                            width={20} height={20}
                        />
                        <p className="text-[14px] text-gray-600">
                            {city_mpg} MPG
                        </p>
                    </div>
                </div>

                
            </div>
            <div className="mx-auto  w-full ">
                <CustomButton 
                    title="View More"
                    btnStyles={`${`w-full mx-auto text-[16px]  bg-blue-500
                    rounded-full text-white font-semibold  px-10 mt-3
                    `}`}
                    textStyles="leading-[17px] text-[14px] text-white "
                    handleClick={() =>setIsOpen(true)}
                />
            </div>

            <CarDetails
                isOpen={isOpen} 
                closeModal={() =>setIsOpen(false)}
                car={car}
            />
        </div>
    )
}
 