import { useEffect, useState, type ReactElement } from "react"
import { VideoIcon } from "../icons/VideoIcon"
import { DeleteIcon } from "../icons/DeleteIcon"
import { BACKEND_URL } from "../config"
import {motion} from 'motion/react'
import {toast} from "react-hot-toast"
import axios from "axios"
import { useMediaQuery } from "react-responsive";


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
  const [deleting,setDeleting]=useState(false);
  const isTwitter=props.type==="twitter";
  const isDesktop=useMediaQuery({minWidth:1024})
  useEffect(() => {

      //@ts-ignore
      if(window.twttr){

         //@ts-ignore
         window.twttr.widgets.load();

      }

   }, []);
  async function handleDelete(){
    // Delete logic here
    try{
      setDeleting(true);
    await axios.delete(BACKEND_URL+`/content/content/${props._id}`,{
    headers:{
      "Authorization":`Bearer ${localStorage.getItem("token")}`
    }
    }
    )

    
    toast.success("Content deleted successfully!",{
      duration:2000,
    })
    props.refresh();
  }
  catch(err:any){
    console.log(err.response.data)
    toast.error("Error deleting content!",{
      duration:2000,
    }
   
  )
  }
   finally{
      setDeleting(false);
    }
}

   return ( 
   <div> 
    <motion.div 
    whileTap={{
      scale:0.98,
      boxShadow:"0px 15px 40px rgba(0,0,0,0.15)"

    }}
    whileHover={{scale:1, 
      boxShadow:"0px 15px 40px rgba(0,0,0,0.15)",
      y:-4, 
       }} 
      transition={{ type: "spring", stiffness: 300, damping: 20 }} 
      animate={{}} 
      className={`${isTwitter ? "h-[400px]" : "h-auto sm:h-[420px]"} hover:cursor-pointer w-full bg-gray-50/50 rounded-lg p-4 flex flex-col shadow shadow-md h-[400px] ml-auto mt-8 border border-slate-200`}> 
      <div className="justify-between items-center gap-2 "> 
        <div className="flex gap-2 items-center">
           <div className="text-slate-600 "> 
            {props.type==="youtube" && <VideoIcon/>} 
            </div>
             <span className="text-lg line-clamp-2 font-semibold text-slate-800 pb-2"> 
              {props.title} </span> 
              </div>
               </div>
                <div className="flex-1 overflow-hidden"> 
                  {
                  props.type === "youtube" && 
                  <iframe className="w-full h-[300px] rounded-lg" 
                  src={props.link .replace("youtu.be/", "youtube.com/embed/") .replace("watch?v=", "embed/")}
                   title="YouTube video player" allowFullScreen /> }

                    {props.type === "article" && (
                     <div className="bg-white  py-3 px-2 mt-2 mb-3">

                        <a href={props.link} target="_blank" 
                       className="text-blue-500  " > Open Article </a> 
                      </div>
                     
                     )} 


                       {props.type === "twitter" && (
                         <div className="h-full rounded-lg overflow-hidden  max-w-[550px]  ">
                           <div className=" h-full w-full [scrollbar-width:none] [-ms-overflow-style:none] overflow-y-auto overflow-x-auto"> 

                          <div className="origin-top-left ">
                              <blockquote className="twitter-tweet"
                            > 
                              <a href={props.link.replace("x.com","twitter.com")}></a>
                               </blockquote> 
                            </div>

                               </div> 
                               </div> )} 

                               </div> 
                               <div className="flex mt-1 justify-end gap-2"> 
                                <motion.button whileHover={{scale:1.04, backgroundColor:"rgba(248,113,113,0.2)", }} 
                                whileTap={{ scale: 0.96 }}
                                 transition={{ duration: 0.15 }} 
                                 disabled={deleting}
                                  className="group flex items-center text-sm gap-1 text-red-500 hover: bg-red-300/40 py-[4px] px-1 mt-2 rounded-sm font-semibold " onClick={handleDelete}>
                                     <DeleteIcon className="size-4 text-red-500 " /> 
                                     {deleting?"Deleting...":"Delete"} </motion.button> 
                                     </div> </motion.div> </div> ) }