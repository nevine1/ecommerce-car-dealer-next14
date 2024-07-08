import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title: string;
    btnStyles?: string;
    btnType?: "button" | "submit";
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}