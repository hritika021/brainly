
import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { useState } from "react";
import { Hamburger, Menu } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";



export function Layout(){
    const [isOpen,setOpen]=useState(false);
   
    return (
        <div className="flex min-h-screen">
          

    <div className="hidden lg:block w-[240px] shrink-0" />
  
            <div className="fixed lg:hidden w-8 rounded-md  items-center justify-center flex h-8 bg-blue-800 z-40 ">
             <button className="text-white" onClick={()=>{
                console.log(isOpen)
                setOpen(!isOpen)
             }}>
<Menu size={23}/>
             </button>
            </div>

            <AnimatePresence>
{isOpen &&(
    <>
    <motion.div onClick={()=>{setOpen(false)}} className="inset-0 fixed  bg-black/40 z-40 lg:hidden"/>
        <motion.div
        initial={{x:-240}}
        animate={{x:0}} exit={{x:-240}} 
        transition={{duration:0.25}} className="fixed left-0 top-0 h-screen w-[200px] bg-white z-50 lg:hidden">
            <Sidebar onClose={()=>setOpen(false)}/>


        </motion.div>

    
    </>
)}

            </AnimatePresence>
              <Sidebar onClose={()=>setOpen(false)} className="lg:flex hidden"/>
            

    <main className="flex-1 bg-gray-200">
        <Outlet />
    </main>

</div>
    )
}