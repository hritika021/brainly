import { useState } from "react";
import { ToggleButton } from "./ToggleButton";
import { motion } from "motion/react";
import toast from "react-hot-toast";

export const ShareBrain=({open,onClose,shareBrain,text}:{shareBrain:(share:boolean)=>Promise<string>,text:string,open:boolean ,onClose:()=>void})=>{
    const [shareEnabled,setShareEnabled]=useState(false);
    const [shareLink,setShareLink]=useState("");
    const [copied,setCopied]=useState(false);

    async function handleCopy(){
        try{
            await navigator.clipboard.writeText(shareLink);
            setCopied(true);
            setTimeout(()=>{
setCopied(false)
            },1000)
        

        }
        catch(e){
            toast.error("Failed to copy link")
        }

    }

    if(!open) return null;

    return (
           <div className="z-50 fixed inset-0  flex items-center justify-center ">
                   <div className={`absolute fixed inset-0 w-screen h-screen bg-black/30 top-0 left-0 backdrop-blur-sm `} onClick={(onClose)}>
            </div>
            <div className="bg-white relative rounded-md shadow-lg w-[350px] p-5 ">
               <h1 className="font-semibold text-lg">Share your brain</h1>
               <p className="text-gray-500 text-sm font-semibold">Anyone with the link can view your saved content</p>
               <div className="flex justify-between mt-6 font-semibold text-md ">
                {shareEnabled? text="Share Enabled":text="Share Disabled"}
              <ToggleButton enabled={shareEnabled} onClick={async()=>{
               const newState=!shareEnabled;
               setShareEnabled(newState);
               if(newState){
                  const hash=await shareBrain(newState);
                  const url=`${window.location.origin}/shared/${hash}`;
                  setShareLink(url);
               } else{
               await shareBrain(false);
               setShareLink("");
               }
              }}/>


               </div>
               {shareEnabled && <div className="mt-6 flex flex-col">
                <label htmlFor="" className="font-semibold text-md">Share Link</label>
              <div className="flex">
                  <input value={shareLink} readOnly placeholder="Paste your link here" className="border border-2 rounded-sm p-[8px] w-full"/>
                  <div className="">

                    </div>
                </div>
                </div>
                }
                    <div className="flex justify-end">
   <motion.button
   whileHover={{
    scale: 1.03
}}

whileTap={{
    scale: 0.97
}}
    onClick={onClose} className="mt-10 text-gray-800 text-sm font-medium border-2 rounded-md p-1 px-4">
      Close
   </motion.button>
</div>
            </div>
        
           </div>
    )



}
