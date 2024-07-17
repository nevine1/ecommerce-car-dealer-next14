import React from 'react'
import { Car } from '../types/page'
interface carCardProps {
    car: Car; 
}

export const CarCard = ({car}: carCardProps) => {
    const { city_mpg, class, combination_mpg, cylinders, displacement,
        drive, fuel_type, highway_mpg, make, model, transmission, year} = car
    return (
        <div>
            
        </div>
    )
}
