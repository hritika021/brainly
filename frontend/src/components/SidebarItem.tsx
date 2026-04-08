import type { ReactElement } from "react";

interface SideBarItemProps{
icon:ReactElement|string,
text:string

}

export function SideBarItem(props:SideBarItemProps){
    return (
        <div className="flex items-center gap-2 ">
            {props.icon} {props.text}
        </div>
    )

}