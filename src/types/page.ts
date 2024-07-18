import { MouseEventHandler } from "react";
import { manufacturers } from '../components/constants/page';
import { LargeNumberLike } from "crypto";

export interface CustomButtonProps{
    title: string;
    btnStyles?: string;
    btnType?: "button" | "submit";
    className?: string;
    textStyles?:string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    isDisabled?: boolean;

}

export interface SearchManufactureProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}


/* export interface Cars {
    cars: []
}
 */
export interface CarsListState {
    isLoading: boolean;
    carsError: string | null;
    carsSuccess: string | null;
    cars: Car[];
  }


export interface Car {
    city_mpg: number;
    class:string;
    combination_mpg: number; 
    cylinders: number;
    displacement: number; 
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: string;
  }