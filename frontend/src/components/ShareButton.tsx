import {motion, scale} from 'motion/react'

interface Button{
text:string,
isActive:boolean,
onClick:()=>void
}

export function FilterButton(props:Button){
  
    return (
        <motion.button
        animate={{
    scale: props.isActive ? 1.05 : 1,
  }}
  transition={{
    type: "spring",
    stiffness: 300,
    damping: 20,
  }}
        whileHover={{scale:1.03}}
        whileTap={{scale:0.96}}
        onClick={props.onClick} className={`${props.isActive?'bg-pink-100 hover:bg-pink-200 text-[#ee427f]':'bg-white hover:bg-[#fdf7fa]'} px-2 rounded-lg border border-pink-200 transition-colors duration-300 md:px-6 font-[Inter] font-medium   py-2`}>
{props.text}
        </motion.button>
    )
}