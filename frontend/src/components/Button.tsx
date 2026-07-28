import { motion } from "motion/react"
import type { ReactElement } from "react"

interface Button{
    text?:string,
    startIcon?:ReactElement|string,
    endIcon?:ReactElement|string,
    variant:"primary"|"secondary",
    onClick:() => void ,
    className?:string,
    children?:React.ReactNode
  size?: "sm" | "md" | "lg";
}
const variantStyles={
    "primary":"bg-[#df5983] text-white hover:bg-pink-600",
    "secondary":"bg-[#faf7f7] border-pink-300 border text-pink-600 hover:bg-pink-100"
}

const defaultStyles="rounded-md whitespace-nowrap text-sm px-2 font-[Inter] md:font-medium sm:px-2 md:px-4 md:px-2 h-10 flex items-center  "

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