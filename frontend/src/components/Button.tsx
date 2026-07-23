import { motion } from "motion/react"
import type { ReactElement } from "react"

interface Button{
    text:string,
    startIcon?:ReactElement|string,
    endIcon?:ReactElement|string,
    variant:"primary"|"secondary",
    onClick:() => void ,
    className?:string

}
const variantStyles={
    "primary":"bg-purple-600 text-white",
    "secondary":"bg-purple-200 text-purple-600"
}

const defaultStyles="rounded-md whitespace-nowrap text-sm px-2  sm:px-2 md:px-4 md:px-2 h-10 flex items-center  "

export const Button=(props:Button)=>{
    
return (
   <motion.button 
   transition={{
    duration:0.18,
ease:"easeOut"
   }}
   whileHover={{
scale:1.03,
boxShadow:"0px 0px 9px rgba(0,0,0,0.3)",
   }}
   whileTap={{scale:0.97}}

   onClick={props.onClick} className={`${props.className ?? ""} ${defaultStyles} ${variantStyles[props.variant]}  `}>

    {props.startIcon}
    {props.text}
  
</motion.button>
)

}