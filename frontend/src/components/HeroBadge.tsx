
interface BadgeProps{
    text:string,
    icon?:React.ReactNode,
    value:number

}

export const HeroBadge=(props:BadgeProps)=>{
return(
    <div className='bg-white w-36 py-[5px] border border-pink-200  rounded-lg'>
    <div className="flex flex-col items-center">
    <div className="flex items-center gap-1 sm:gap-2 font-[Inter]">
   <div className="bg-[#fdebf0] w-12 border border-pink-200 h-12 flex items-center  justify-center rounded-full ">
     {props.icon &&  <div className="w-5 h-5 sm:w-6 sm:h-6  text-pink-500" >
        {props.icon}
        </div>}

   </div>
    <div className="flex flex-col">
        <span className="text-lg sm:text-2xl font-bold font-[Inter]">{props.value}</span>
       <span className="font-[Inter] text-[10px] sm:text-[14px] text-gray-500">
    {props.text}
    </span>
    </div>
    </div>
   
  </div>
</div>

)
}