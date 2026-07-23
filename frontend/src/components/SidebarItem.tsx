import type { ReactElement } from "react";

interface SideBarItemProps{
icon:ReactElement|string,
onClick:()=>void
text:string,
active:boolean

}

export function SideBarItem(props:SideBarItemProps){
    return (
       <button  className={`${props.active?"bg-blue-100 text-blue-600":"hover:bg-gray-200"} flex items-center gap-3 rounded-md px-4 mx-3 py-3 `} onClick={props.onClick}>
   <div className="w-5 flex justify-center">
      {props.icon}
   </div>

   <span>{props.text}</span>
</button>
    )

}