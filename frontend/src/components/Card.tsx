import type { ReactElement } from "react"
import { VideoIcon } from "../icons/VideoIcon"
import { DeleteIcon } from "../icons/DeleteIcon"
import { BACKEND_URL } from "../config"
import axios from "axios"

interface Card{
    title:string,
    refresh:()=>void,
    _id:string,
    link:string,
    startIcon?:ReactElement|string,
    endIcon?:ReactElement|string,
    type:"twitter"|"youtube"|"article"

}


export const Card=(props:Card)=>{
  async function handleDelete(){
    // Delete logic here
    await axios.delete(BACKEND_URL+`/content/content/${props._id}`,{
    headers:{
      "Authorization":`Bearer ${localStorage.getItem("token")}`
    }
    }
    
    )
    props.refresh();
    

  }

    return (
        <div>
        <div className="bg-white rounded-lg p-4 flex flex-col shadow shadow-md max-w-72 h-[400px] ml-12 mt-10 h-auto border border-slate-200">
            <div className="flex flex-col-4 justify-between items-center  gap-2  ">
               <div className="flex gap-2  items-center">
              <div className="text-slate-600 ">
             {props.type==="youtube" && <VideoIcon/>}
              </div>
       <span className="text-lg font-semibold text-slate-800">
  {props.title}
</span>
                 </div>
                          
             
               </div>
          
<div className="pt-1 rounded-lg">
   {props.type === "youtube" && 
  <iframe
    className="w-full h-[300px] rounded-lg"
    src={props.link
      .replace("youtu.be/", "youtube.com/embed/")
      .replace("watch?v=", "embed/")}
    title="YouTube video player"
    allowFullScreen
  />
}

  {props.type === "article" && (
      <a
         href={props.link}
         target="_blank"
         className="text-blue-500 underline"
      >
         Open Article
      </a>
   )}
   {props.type === "twitter" && (
  
     <div className="h-[300px] overflow-hidden rounded-md">

      <div className="scale-[0.60] origin-top-left w-[160%]">

         <blockquote className="twitter-tweet">
            <a href={props.link.replace("x.com","twitter.com")}></a>
         </blockquote>

      </div>

   </div>
)}
</div>

<div className="flex mt-auto justify-end gap-2">
  <button className="flex items-center text-sm gap-1 text-red-500 hover:text-red-700 bg-red-300/40 p-0.5 mt-2 rounded-sm font-semibold " onClick={handleDelete}>
    <DeleteIcon  className="size-3 text-red-500 hover:text-red-700" />
Delete
  </button>
</div>

        </div>
            
            </div>

    )
}