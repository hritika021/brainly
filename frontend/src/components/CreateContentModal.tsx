
import axios from "axios";
import { CrossIcon } from "../icons/CrossIcon";
import { useRef,useState } from "react";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import {motion,AnimatePresence} from "motion/react"
import {Loader2} from "lucide-react"


enum ContentType {
Twitter="twitter",
Youtube="youtube",
Article="article"
    
}


export const  CreateContent=({open,onClose,refresh}:{refresh:()=>void,open:boolean, onClose:()=>void})=>{
const [addContentLoading,setAddContentLoading]=useState(false);
    
    if(!open) return null;
const linkRef=useRef<HTMLInputElement>(null);
const titleRef=useRef<HTMLInputElement>(null);
const [error,setError]=useState("");

const [type,setType]=useState(ContentType.Twitter);


    const handleCreateContent=async()=>{
        setError("")
        // Handling content creation logic here
const link=linkRef.current?.value;
const title=titleRef.current?.value;
try{

 if(!link || !title){
    setError("Please fill all the fields!")
    return;
    
}   
setAddContentLoading(true);
// await new Promise((resolve)=>setTimeout(resolve,10000));
const response=await axios.post(BACKEND_URL+"/content/content",{
    link,type,title},
{
   headers:{
"Authorization":`Bearer ${localStorage.getItem("token")}`
   }
})
toast.success("Content added successfully!",{
    duration:2000,
})
console.log(response);
refresh();
onClose();

}
    catch(err:any){
        console.log(err.response.data)
        toast.error("Failed to add content.",{
            duration:2000,
        })
        setError(err.response?.data?.msg || "Something went wrong")

        
    }
    finally{
        setAddContentLoading(false);
    }
}

const navigate=useNavigate();
    return (
        <div className="z-50 fixed inset-0  flex items-center justify-center p-4 ">
        
        <motion.div initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}} className={`absolute fixed inset-0 w-screen h-screen bg-black/30 top-0 left-0 backdrop-blur-sm `} onClick={(onClose)}>
            </motion.div>

        <motion.div
        initial={{
            scale:0.9,
            opacity:0,
            y:20
        }}

        animate={{
            scale:1,
            opacity:1,
            y:0
        }}
        exit={{
            scale:0.95,
            opacity:0,
            y:10
        }}
        className="relative bg-white rounded-md shadow-[0_10px_40px_rgba(236,72,153,0.15)] w-full max-w-md p-[26px]">
        <CrossIcon  onClick={onClose}/>
            
                <h2 className="font-semibold font-[Inter] text-xl">Add New <span className="text-[#dd5781]">Content</span> </h2>
                <p className="text-[13px] font-[Inter] text-gray-700 ">Add a link to your <span className="text-[#dd5781]">favorite </span>content</p>
                {error && (
                    <div className="text-sm text-red-500 mt-3 bg-red-100/60 border-red-300 p-1 rounded-sm font-semibold border">
                        {error}
                    </div>
                )}
              <p className="mt-4 font-[Inter] mb-1  text-gray-700 font-medium">Title</p>
              <input type="text" ref={titleRef} placeholder="Enter a title for this content" className="border  border-gray-300 focus:border-pink-300 focus:outline-none border-2 focus:ring-2 focus:ring-pink-200  py-1 px-2 w-full rounded-md " />
                
            
              <p className="mt-4 mb-1 font-[Inter] text-gray-700 font-medium">Link</p>
              <input type="text" ref={linkRef} placeholder="https://example.com" className="border border-gray-300 focus:border-pink-300 focus:outline-none border-2 focus:ring-0  focus:ring-2 focus:ring-pink-200   py-1 px-2 w-full rounded-md " />
                
 
            
              <p className="mt-4 mb-1 font-[Inter] font-medium text-gray-700">Content Type</p>
<div className="mt-2 flex  flex-wrap gap-3 md:gap-6">
    {[ContentType.Twitter, ContentType.Youtube, ContentType.Article].map(
        (item) => (
            <motion.button
                key={item}
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setType(item)}
                className={`rounded-md border px-[11px] md:px-7 md:py-2 flex md:justify-between py-2 text-sm font-medium transition-all duration-200
                ${
                    type === item
                        ? "bg-[#dd5781] text-white border-[#dd5781] shadow-sm"
                        : "bg-white text-gray-600 border-pink-200 hover:bg-pink-50 hover:border-pink-300"
                }`}
            >
                {item === ContentType.Youtube
                    ? "YouTube"
                    : item.charAt(0).toUpperCase() + item.slice(1)}
            </motion.button>
        )
    )}
</div>

            <div className="flex justify-between md:justify-end mt-4 gap-2">
                <button disabled={addContentLoading} className="border rounded-md px-4 py-[6px] border-[2px]" onClick={onClose}>Cancel</button>
                <motion.button whileHover={{
                    scale:addContentLoading?1:1.03,
                           backgroundColor: "#cc4e76", 
                    boxShadow:"0 10px 15px rgba(0,0,0,0.15) "
                }}
                  whileTap={{
        scale: 0.97
    }}
    transition={{
        duration: 0.18,
        ease: "easeOut"
    }}
                className={`${addContentLoading?"bg-pink-200":"bg-[#dd5781] "} text-white p-[6px] rounded-md`}
                onClick={handleCreateContent} disabled={addContentLoading}>
                 {addContentLoading ? (
                    <div className="flex items-center gap-2 ">
        <Loader2 className="w-4 h-4 animate-spin" />
        <span>Adding...</span>
    </div>
) : (
    "Add Content"
                 )}
                </motion.button>
                

            </div>
        </motion.div>
        







    
        </div>
    )
}