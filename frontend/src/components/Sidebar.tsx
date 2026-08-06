
import { SideBarItem } from "./SidebarItem";
import { HomeIcon } from "../icons/HomeIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { useLocation, useNavigate } from "react-router-dom";

import { Brain, Link } from "lucide-react";

export const Sidebar=({className,onClose}:{className?:string, onClose:()=>void})=>{
const location= useLocation();
const params=new URLSearchParams(location.search);
const type=params.get("type");
    const navigate=useNavigate();
    function handleLogout(){
        localStorage.removeItem("token");
        navigate('/')
    }

  
return(
    <div className="bg-[#fdf7fa]">


    <div className={`h-screen flex flex-col  flex   fixed border-r rounded-r-2xl   border-pink-200 shadow-sm bg-white  w-[240px] left-0  top-0  ${className || ''}`}>
      
  <div className="flex pl-5 font-[Inter] text-xl items-center   gap-1 pt-4">
    <Brain className="text-[#f13970]" />
    Brainly</div>
         <div className="flex-1 flex-col h-full flex">
            <div className=" pt-7 flex flex-col gap-1 ">
            <SideBarItem 
            active={location.pathname==='/dashboard'}   onClick={()=>
               {
                navigate('/dashboard');
                onClose?.()
               }
                
            } icon={<HomeIcon />} text="All Content" />

        <SideBarItem active={location.pathname==='/search' && type==="youtube"}  onClick={()=>{
            navigate('/search?type=youtube')
        onClose?.()}} icon={<YoutubeIcon className="flex items-center"/>} text="Youtube"   />
        <SideBarItem
        active={location.pathname==='/search' && type==="twitter"} onClick={()=>{
            
            navigate("/search?type=twitter")
            onClose()}} icon={<TwitterIcon/>} text="Twitter" />

        <SideBarItem
        active={location.pathname==='/search' && type==='article'} onClick={()=>{

            navigate("/search?type=article")
            onClose()}} icon={<Link/>} text="Articles" />
      
    </div>
    <button onClick={handleLogout} className="hover:bg-red-200 rounded-md lg:mt-auto lg:mb-8 pl-2 py-3 mx-2  gap-1 font-[Inter] font-medium flex items-center text-red-600">
        <span className="mx-3" >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-red-600">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
</svg>

</span>Logout</button>
            </div>
    </div>
    </div>
)

}