import type { ReactElement } from "react";

interface SideBarItemProps{
icon:ReactElement|string,
onClick:()=>void
text:string

}

export function SideBarItem(props:SideBarItemProps){
    return (
       <button  className="flex items-center gap-3 rounded-md px-4 py-3 hover:bg-gray-200" onClick={props.onClick}>
   <div className="w-5 flex justify-center">
      {props.icon}
   </div>

   <span>{props.text}</span>
</button>
    )

}