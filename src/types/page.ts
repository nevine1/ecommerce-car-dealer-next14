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
