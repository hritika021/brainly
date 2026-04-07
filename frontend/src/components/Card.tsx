import type { ReactElement } from "react"
import { VideoIcon } from "../icons/YoutubeIcon"
import { ShareIcon } from "../icons/ShareIcon"
import { DeleteIcon } from "../icons/DeleteIcon"

interface Card{
    title:string,
    link:string,
    startIcon?:ReactElement|string,
    endIcon?:ReactElement|string,
    type:"twitter"|"youtube"

}


export const Card=(props:Card)=>{
    return (
        <div>
        <div className="bg-white rounded-lg p-4 shadow shadow-md max-w-96 ml-12 mt-10 h-auto border border-slate-200">
            <div className="flex justify-between items-center  gap-2  ">
               <div className="flex gap-2 items-center">
              <div className="text-slate-600 ">
             {props.type==="youtube" && <VideoIcon/>}
              </div>
       <span className="text-lg font-semibold text-slate-800">
  {props.title}
</span>
                 </div>
                          
              <div className="flex items-center">
            <div className="pr-2 text-slate-600">
                <a href={props.link} target="_blank" >
                <ShareIcon className="text-slate-600"/>
                </a>
            </div>
             <div className="pr-2 text-slate-600">
                 <DeleteIcon className="size-5 text-slate-600 cursor-pointer hover:text-slate-700"/>
             </div>
       
          
                      </div>
               </div>
          
<div className="pt-4">
   {props.type === "youtube" && 
  <iframe
    className="w-full aspect-video"
    src={props.link
      .replace("youtu.be/", "youtube.com/embed/")
      .replace("watch?v=", "embed/")}
    title="YouTube video player"
    allowFullScreen
  />
}

   {props.type === "twitter" && (
  <blockquote className="twitter-tweet">
    <a href={props.link}></a>
  </blockquote>
)}
</div>

        </div>
            
            </div>

    )
}