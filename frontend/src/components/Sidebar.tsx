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
    function handleLogout(){
        localStorage.removeItem("token");
        navigate('/signin')
    }
return(
    <div>

<div className="md:block  hidden">

</div>
    {open && <div className={`h-screen flex flex-col hidden md:flex   fixed border-r   border-gray-300 shadow-sm bg-white w-[240px] left-0 top-0  ${className || ''}`}>
      
  <div className="flex  text-2xl items-center gap-2 pt-2">
    <AcademicCap/>
    Brainly</div>
         <div className="flex-1 flex-col h-full flex">
            <div className=" pt-5 flex flex-col gap-1 ">
            <SideBarItem onClick={()=>navigate('/')} icon={<HomeIcon />} text="All Content" />
        <SideBarItem onClick={()=>navigate('/search')} icon={<SearchIcon />} text="Search" />
        <SideBarItem onClick={()=>navigate('/search?type=youtube')} icon={<YoutubeIcon className="flex items-center"/>} text="Youtube"   />
        <SideBarItem onClick={()=>navigate("/search?type=twitter")} icon={<TwitterIcon/>} text="Twitter" />
      
    </div>
    <button onClick={handleLogout} className="hover:bg-gray-200 rounded-md px-4 py-3 mt-auto gap-1 flex items-center ">
        <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
</svg>
</span>Logout</button>
            </div>
    </div>}
    </div>
)

}