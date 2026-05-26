
import axios from "axios";
import { CrossIcon } from "../icons/CrossIcon";
import { useRef,useState } from "react";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";


enum ContentType {
Twitter="twitter",
Youtube="youtube",
Article="article"
    
}


export const  CreateContent=({open,onClose,refresh}:{refresh:()=>void,open:boolean, onClose:()=>void})=>{

    
    if(!open) return null;
const linkRef=useRef<HTMLInputElement>(null);
const titleRef=useRef<HTMLInputElement>(null);
const [error,setError]=useState("");

const [type,setType]=useState(ContentType.Twitter);


    const handleCreateContent=async()=>{
        setError("")
        // Handle content creation logic here
const link=linkRef.current?.value;
const title=titleRef.current?.value;
try{

 if(!link || !title){
    setError("Please fill all the fields!")
    return;
    
}   
const response=await axios.post(BACKEND_URL+"/content/content",{
    link,type,title},
{
   headers:{
"Authorization":`Bearer ${localStorage.getItem("token")}`
   }
})

console.log(response);
refresh();
onClose();

}
    catch(err:any){
        console.log(err.response.data)


        
    }
}

const navigate=useNavigate();
    return (
        <div className="z-50 fixed inset-0  flex items-center justify-center ">
        
        <div className={`absolute fixed inset-0 w-screen h-screen bg-black/30 top-0 left-0 backdrop-blur-sm `} onClick={(onClose)}>
            </div>
        <div className="relative bg-white rounded-md shadow-lg w-[420px] p-[26px]">
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
                <button className="border rounded-md p-[6px] border-[2px]" onClick={onClose}>Cancel</button>
                <button className="bg-blue-800 text-white p-[6px] rounded-md"
                onClick={handleCreateContent}>Add Content</button>
                

            </div>
        </div>
        







    
        </div>
    )
}