import { useState } from "react"
import { CrossIcon } from "../icons/CrossIcon";


export const CreateContent=({open,onClose}:{open:boolean, onClose:()=>void})=>{
    if(!open) return null;
    return (
        <div className="z-50 fixed inset-0  flex items-center justify-center ">
        
        <div className={`absolute fixed inset-0 w-screen h-screen bg-black/30 top-0 left-0 backdrop-blur-sm `} onClick={(onClose)}>
            </div>
        <div className="relative bg-white rounded-md shadow-lg w-[420px] p-[26px]">
        <CrossIcon onClick={onClose}/>
            
                <h2 className="font-semibold text-xl">Add New Content</h2>
                <p className="text-[13px] text-gray-700 ">Add a link to your favourite content</p>
              <p className="mt-4 mb-1 font-semibold">Title</p>
              <input type="text" placeholder="Enter a title for this content" className="border border-gray-300 focus:border-gray-600 focus:outline-none border-2 focus:ring-0  py-1 px-2 w-full rounded-md " />
                
            
              <p className="mt-4 mb-1 font-semibold">Link</p>
              <input type="text" placeholder="https://example.com" className="border border-gray-300 focus:border-gray-600 focus:outline-none border-2 focus:ring-0  py-1 px-2 w-full rounded-md " />
                
            
              <p className="mt-4 mb-1 font-semibold">Description</p>
              <input type="text" placeholder="Enter a description` for this content" className="border border-gray-300 focus:border-gray-600 focus:outline-none border-2 focus:ring-0  py-1 px-2 w-full rounded-md " />
                
            
              <p className="mt-4 mb-1 font-semibold">Content Type</p>
                <select className="border border-gray-300 focus:border-gray-600 focus:outline-none border-2 focus:ring-0  py-1 px-2 w-full rounded-md ">
                    <option value="twitter">Twitter</option>
                    <option value="youtube">YouTube</option>
                    <option value="article">Article</option>
                </select> 
            

            <div className="flex justify-end mt-4 gap-2">
                <button className="border rounded-md p-[6px] border-[2px]" onClick={onClose}>Cancel</button>
                <button className="bg-blue-800 text-white p-[6px] rounded-md">Add Content</button>

            </div>
        </div>
        







    
        </div>
    )
}