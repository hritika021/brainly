import { useState } from "react";
import { SideBarItem } from "./SidebarItem";
import { HomeIcon } from "../icons/HomeIcon";
import { SearchIcon } from "../icons/SearchIcon";
import { VideoIcon } from "../icons/VideoIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { AcademicCap } from "../icons/AcademicCap";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";

export const Sidebar=({className}:{className?:string})=>{
    const [open,setOpen]=useState(true);
    const navigate=useNavigate();
return(
    <div>

<div className="md:block  hidden">

</div>
    {open && <div className={`h-screen hidden md:block   fixed border-r   border-gray-300 shadow-sm bg-white w-[240px] left-0 top-0  ${className || ''}`}>
      
  <div className="flex  text-2xl items-center gap-2 pt-2">
    <AcademicCap/>
    Brainly</div>
         <div className=" pt-5 flex flex-col gap-1 ">
            <SideBarItem onClick={()=>navigate('/')} icon={<HomeIcon />} text="All Content" />
        <SideBarItem onClick={()=>navigate('/search')} icon={<SearchIcon />} text="Search" />
        <SideBarItem onClick={()=>navigate('/search?type=youtube')} icon={<YoutubeIcon className="flex items-center"/>} text="Youtube"   />
        <SideBarItem onClick={()=>navigate("/search?type=twitter")} icon={<TwitterIcon/>} text="Twitter" />
     
      
    </div>
    </div>}
    </div>
)

}