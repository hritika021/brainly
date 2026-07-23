
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
        className="relative bg-white rounded-md shadow-lg w-full max-w-md p-[26px]">
        <CrossIcon onClick={onClose}/>
            
                <h2 className="font-semibold text-xl">Add New Content</h2>
                <p className="text-[13px] text-gray-700 ">Add a link to your favourite content</p>
                {error && (
                    <div className="text-sm text-red-500 mt-3 bg-red-100/60 border-red-300 p-1 rounded-sm font-semibold border">
                        {error}
                    </div>
                )}
              <p className="mt-4 mb-1 font-semibold">Title</p>
              <input type="text" ref={titleRef} placeholder="Enter a title for this content" className="border border-gray-300 focus:border-gray-600 focus:outline-none border-2 focus:ring-0  py-1 px-2 w-full rounded-md " />
                
            
              <p className="mt-4 mb-1 font-semibold">Link</p>
              <input type="text" ref={linkRef} placeholder="https://example.com" className="border border-gray-300 focus:border-gray-600 focus:outline-none border-2 focus:ring-0  py-1 px-2 w-full rounded-md " />
                
 
            
              <p className="mt-4 mb-1 font-semibold">Content Type</p>
                <select className="border border-gray-300 focus:border-gray-600 focus:outline-none border-2 focus:ring-0  py-1 px-2 w-full rounded-md " value={type} onChange={(e)=>setType(e.target.value as ContentType)}>
                    <option value={ContentType.Twitter}>Twitter</option>
                    <option value={ContentType.Youtube}>YouTube</option>
                    <option value={ContentType.Article}>Article</option>
                </select> 
            

            <div className="flex justify-end mt-4 gap-2">
                <button disabled={addContentLoading} className="border rounded-md p-[6px] border-[2px]" onClick={onClose}>Cancel</button>
                <motion.button whileHover={{
                    scale:addContentLoading?1:1.03,
                           backgroundColor: "#234fc6", 
                    boxShadow:"0 10px 15px rgba(0,0,0,0.15) "
                }}
                  whileTap={{
        scale: 0.97
    }}
    transition={{
        duration: 0.18,
        ease: "easeOut"
    }}
                className={`${addContentLoading?"bg-blue-200":"bg-blue-800"} text-white p-[6px] rounded-md`}
                onClick={handleCreateContent} disabled={addContentLoading}>
                 {addContentLoading ? (
                    <div className="flex items-center gap-2">
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