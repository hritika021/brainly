import { useState } from "react";
import { SideBarItem } from "./SidebarItem";
import { HomeIcon } from "../icons/HomeIcon";
import { SearchIcon } from "../icons/SearchIcon";
import { VideoIcon } from "../icons/VideoIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export const Sidebar=({className}:{className?:string})=>{
    const [open,setOpen]=useState(true);
return(
    <div>

<div className="md:block hidden">

</div>
    {open && <div className={`h-screen fixed border-r hidden md:block absolute border-gray-300 shadow-sm bg-white w-48 left-0 top-0 p-4 ${className || ''}`}>
       <div className="flex flex-col gap-6 pt-20">
         <SideBarItem icon={<HomeIcon />} text="All Content" />
        <SideBarItem icon={<SearchIcon />} text="Search" />
        <SideBarItem  icon={<YoutubeIcon className="flex items-center"/>} text="Youtube"   />
        <SideBarItem icon={<TwitterIcon/>} text="Twitter" />
     
    </div>
    </div>}
    </div>
)

}