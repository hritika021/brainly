import { useState } from "react"
import { Button } from "../components/Button"
import { Card } from "../components/Card"
import { PlusIcon } from "../icons/PlusIcon"
import { ShareIcon } from "../icons/ShareIcon"
import { CreateContent } from "../components/CreateContentModal"
import { Sidebar } from "../components/Sidebar"
import { ShareBrain } from "../components/ShareBrain"
import { useContent } from "../hooks/useContent"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { Skeleton } from "../components/Skeleton"
import { AnimatePresence, motion, stagger } from "motion/react"

export const Dashboard=()=>{
const [open,setOpen]=useState(false);
const [shareOpen,setShareOpen]=useState(false);
const {content,refresh,loading}=useContent();
const [filteredcontent,seetFilteredContent]

const containerVariants={
    hidden:{

    },

    show:{
        transition:{
           delayChildren:stagger(0.10)
        }
    }
}

const cardVariants={
    hidden:{
        opacity:0,
        y:20,
    
    },
    show:{
        opacity:1,
        y:0,
   
        transition:{
duration:0.45,

        }
        
    }
}

async function shareBrain(share:boolean){
   try{ 
    const response=await axios.post(BACKEND_URL+"/content/brain/share",{
        share },{
            headers:{
                "Authorization":`Bearer ${localStorage.getItem("token")}`
            }
        })
    console.log(response.data);
    return response.data.hash;}

    catch(err:any){
        console.log(err.response?.data);
    }
}
    return (

        <div >
            <Sidebar className={''}/>
            
        <div className="p-4 relative md:ml-48 min-h-screen bg-gray-200"> 
          <div  className='flex gap-4 justify-end'> 
             <Button variant='primary' onClick={()=>{setOpen(true)}} text='Add Content' startIcon={<PlusIcon/>}/>
          <Button variant='secondary' onClick={()=>{setShareOpen(true)}} text='Share Brain' startIcon={<ShareIcon className="size-6"/>}/>
        </div>
   
        <motion.div 
        initial="hidden"
        animate="show"
        variants={containerVariants}
      
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1  items-start">
            

          {loading? Array.from({length:8}).map((_,index)=>(
<Skeleton key={index}/>
          )):<AnimatePresence mode="popLayout">
            {content.map(({type,link,title,_id}) => {

    return (
  <motion.div
layout
  variants={cardVariants}
  key={_id}

  exit={{
    opacity:0,
    scale:0.9,
    y:-15
  }}>
    

    
   <Card  _id={_id} 
            type={type}
            link={link}
            title={title}
            refresh={refresh}
        /> 
  </motion.div>    
    )
})}
            </AnimatePresence>}
     
      </motion.div> 
             <AnimatePresence>
                   {open && <CreateContent refresh={refresh} open={open} onClose={()=>setOpen(false)}/>}
                </AnimatePresence>
                    {shareOpen && <ShareBrain shareBrain={shareBrain} text="" open={shareOpen} onClose={()=>setShareOpen(false)}/>}
        </div>
        </div>

    )
}