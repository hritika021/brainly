import { useState } from "react";
import { ToggleButton } from "./ToggleButton";

export const ShareBrain=({open,onClose,text}:{text:string,open:boolean ,onClose:()=>void})=>{
    const [shareEnabled,setShareEnabled]=useState(false);
    if(!open) return null;
    return (
           <div className="z-50 fixed inset-0  flex items-center justify-center ">
                   <div className={`absolute fixed inset-0 w-screen h-screen bg-black/30 top-0 left-0 backdrop-blur-sm `} onClick={(onClose)}>
            </div>
            <div className="bg-white relative rounded-md shadow-lg w-[320px] p-5">
               <h1 className="font-semibold text-lg">Share your brain</h1>
               <p className="text-gray-500 text-sm font-semibold">Anyone with the link can view your saved content</p>
               <div className="flex justify-between mt-6 font-semibold text-md ">
                {shareEnabled? text="Share Enabled":text="Share Disabled"}
              <ToggleButton enabled={shareEnabled} onClick={()=>setShareEnabled(!shareEnabled)}/>


               </div>
               {shareEnabled && <div className="mt-6 flex flex-col">
                <label htmlFor="" className="font-semibold text-md">Share Link</label>
                <input placeholder="Paste your link here" className="border border-2 rounded-sm p-[8px]"/>
                </div>
                }
                    <div className="flex justify-end">
   <button onClick={onClose} className="mt-6 text-gray-800 text-sm font-medium border-2 rounded-md p-1 px-4">
      Close
   </button>
</div>
            </div>
        
           </div>
    )



}
