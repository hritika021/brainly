import type { ReactElement } from "react";

interface SideBarItemProps{
icon:ReactElement|string,
text:string

}

export function SideBarItem(props:SideBarItemProps){
    return (
        <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 rounded-md p-2 transition-all duration-200">
            {props.icon} {props.text}
        </div>
    )

}