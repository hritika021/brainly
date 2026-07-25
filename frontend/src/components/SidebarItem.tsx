import type { ReactElement } from "react";

interface SideBarItemProps{
icon:ReactElement|string,
onClick:()=>void
text:string,
active:boolean

}

export function SideBarItem(props:SideBarItemProps){
    return (
       <button  className={`${props.active?"bg-pink-100 text-[#e65c8b]":"hover:bg-pink-50 text-[#605f61]"} flex items-center font-medium gap-3 rounded-md font-[Inter] px-4 mx-3 py-3 `} onClick={props.onClick}>
   <div className="w-5 flex justify-center">
      {props.icon}
   </div>

   <span>{props.text}</span>
</button>
    )

}