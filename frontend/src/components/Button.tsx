import type { ReactElement } from "react";

interface Button{
    text:string,
    variant:'primary' | 'secondary';
    size:'sm' | 'md' | 'lg';
    startIcon:ReactElement;
    endIcon?:any
    onClick:()=>void;


}

const variantStyles={
    "default":'bg-purple-400 text-white ',
    "primary":"bg-purple-200 text-purple-600 ",
    "secondary":"bg-purple-600 text-white"
}

const defaultStyles="rounded-md p-3"
const sizeStyles={
    "sm":"py-1 px-2",
    "md":"py-2.5 px-4",
    "lg":"py-3 px-6"  
}

export const ButtonComp=(props:Button)=>{
return <button className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]} flex items-center gap-1 justify-center gap-1.5`} onClick={props.onClick}>
    {props.startIcon ? <div className="pr-2">{props.startIcon }</div>: null}{props.text}</button>

    }

    


