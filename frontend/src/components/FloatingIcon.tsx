import {motion} from 'motion/react'



export function FloatingIcon({
  icon,
  className,
}: {
  icon: React.ReactNode;
  className: string;
}) {
  return (
    <motion.div
    animate={{
    y:[0,-10,0],
}}
transition={{
    duration:4,
    repeat:Infinity,
}}
      className={`absolute h-[68px]  w-[68px] items-center justify-center rounded-full border border-pink-100 bg-white/80 text-[#dd5781] shadow-[0_15px_35px_rgba(236,72,153,0.12)] backdrop-blur-xl ${className}`}
    >
      {icon}
    </motion.div>
  );
}
