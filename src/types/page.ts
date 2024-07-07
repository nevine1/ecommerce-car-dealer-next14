import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title: string;
    btnStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}