import { useState } from "react";
import { ToggleButton } from "./ToggleButton";
import { motion } from "motion/react";
import toast from "react-hot-toast";
import { CopyIcon } from "lucide-react";

export const ShareBrain=({open,onClose,shareBrain,text}:{shareBrain:(share:boolean)=>Promise<string>,text:string,open:boolean ,onClose:()=>void})=>{
    const [shareEnabled,setShareEnabled]=useState(false);
    const [shareLink,setShareLink]=useState("");
    const [copied,setCopied]=useState(false);

    async function handleCopy(){
        try{
            await navigator.clipboard.writeText(shareLink);
            console.log(shareLink)
            setCopied(true);
            setTimeout(()=>{
setCopied(false)
            },2000)
        

        }
        catch(e){
            toast.error("Failed to copy link")
        }

    }

    if(!open) return null;

    return (
           <div className="z-50 fixed inset-0  flex items-center justify-center p-4">
                   <div className={`absolute fixed inset-0 w-screen h-screen bg-black/30 top-0 left-0 backdrop-blur-sm `} onClick={(onClose)}>
            </div>
            <div className="bg-white relative rounded-md shadow-[0_10px_40px_rgba(236,72,153,0.15)]  w-full md:w-[380px] p-5 ">
               <h1 className=" font-[Inter] font-semibold text-lg lg:text-xl">Share your <span className="text-[#dd5781] ">brain</span></h1>
               <p className="text-gray-500 font-[Inter] text-sm font-semibold">Anyone with the link can view your saved content</p>
               <div className="flex text-gray-800 justify-between mt-6 font-medium text-md ">
                {shareEnabled?"Share Enabled":"Share Disabled"}
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
                <label htmlFor="" className="font-medium text-sm text-gray-700 font-[Inter]">Share Link</label>
              <div className="flex px-1 gap-2">
                  <input value={shareLink} readOnly placeholder="Paste your link here" className="border border-2 rounded-sm p-[8px] w-full"/>
                  <div className=" flex items-center">
                  <button onClick={handleCopy} className="h-11 rounded-md w-auto font-semibold text-md px-3 bg-[#dd5781] flex justify-center text-white items-center">
                    {copied?"Copied!":<CopyIcon/>}
                  </button>

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
    onClick={onClose} className="mt-8 text-gray-800 text-sm font-medium border-2 w-full lg:w-auto rounded-md font-[Inter] hover:bg-gray-50 py-1 px-4 lg:px-5 lg:py-2">
      Close
   </motion.button>
</div>
            </div>
        
           </div>
    )



}
