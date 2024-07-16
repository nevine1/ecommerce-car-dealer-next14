import { MouseEventHandler } from "react";
import { manufacturers } from '../components/constants/page';

export interface CustomButtonProps{
    title: string;
    btnStyles?: string;
    btnType?: "button" | "submit";
    handleClick?: MouseEventHandler<HTMLButtonElement>;
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
    id: number;
    model: string;
    make: string;
    year: number;

  }