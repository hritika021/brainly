import { useState } from "react";

export const Sidebar=({className}:{className?:string})=>{
    const [open,setOpen]=useState(false);
return(
    <div>

<div>
    
</div>
    <div className={`h-screen fixed border-r hidden md:block absolute border-gray-300 shadow-sm bg-white w-48 left-0 top-0 p-4 ${className || ''}`}>

    </div>
    </div>
)

}