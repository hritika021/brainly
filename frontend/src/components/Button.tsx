import type { ReactElement } from "react"

interface Button{
    text:string,
    startIcon?:ReactElement|string,
    endIcon?:ReactElement|string,
    variant:"primary"|"secondary",
    onClick:() => void 

}
const variantStyles={
    "primary":"bg-purple-600 text-white",
    "secondary":"bg-purple-200 text-purple-600"
}

const defaultStyles="rounded-md px-3 py-2 flex items-center"

export const Button=(props:Button)=>{
    
return (
   <button onClick={props.onClick} className={`${defaultStyles} ${variantStyles[props.variant]} gap-1 `}>

    {props.startIcon}
    {props.text}
  
</button>
)

}