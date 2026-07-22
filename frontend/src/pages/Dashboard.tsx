import { useEffect, useState } from "react"
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
const [input,setInput]=useState("");
const [load,setLoading]=useState(false)
const [filteredcontent,setFilteredContent]=useState(content);

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
async function searchContent(){
try{
    if(!input.trim()){
      setFilteredContent(content);
      return;

    }
    setLoading(true);

const response=await axios.get(`${BACKEND_URL}/content/search?filter=${input}`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }
            )
console.log(response.data.content)
            setFilteredContent(response.data.content);
            return;
} 
catch(e){
    console.log(e)

}
finally{
    setLoading(false);
}}


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

useEffect(() => {
    if (!input.trim()) {
        setFilteredContent(content);
        setLoading(false);
        return;
    }

    setLoading(true);

    const timeout = setTimeout(() => {
        searchContent();
    }, 500);

    return () => clearTimeout(timeout);
}, [input, content]);
    return (

        <div className="flex min-h-screen" >
            <Sidebar />
            
        <div className="relative
flex-1
min-h-screen
bg-gray-200
px-6
py-6
lg:ml-[200px] "> 
          <div  className='flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-4 mb-2 '> 

            <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" placeholder="🔍Search your content..." className="w-full  md:max-w-3xl px-3 py-[10px] mt-1 border rounded-lg bg-white outline-none focus:ring-2 focus:ring-purple-500" /> 
            <div className="flex  justify-center md:justify-end gap-5 mr-2">
                 <Button variant='primary' onClick={()=>{setOpen(true)}} text='Add Content' startIcon={<PlusIcon/>} className={""}/>
          <Button variant='secondary' onClick={()=>{setShareOpen(true)}} text='Share Brain' startIcon={<ShareIcon className="size-6"/>}/>
            </div>
        </div>
   
        <motion.div 
        initial="hidden"
        animate="show"
        variants={containerVariants}
      
        className="grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
xl:grid-cols-4

sm:gap-5
 ">
            

          {loading? Array.from({length:8}).map((_,index)=>(
<Skeleton key={index}/>
          )):load ? (
                <div className="col-span-full flex justify-center items-center py-20">
        <div className="h-10 w-10 border-4 border-gray-300 border-t-purple-600 rounded-full animate-spin" />
    </div>

          ):(
            <AnimatePresence mode="popLayout">
            {filteredcontent.map(({type,link,title,_id}) => {

    return (
  <motion.div
  className="w-full"

  variants={cardVariants}
  key={_id}
layout
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
            </AnimatePresence>
          )}
     
      </motion.div> 
             <AnimatePresence>
                   {open && <CreateContent refresh={refresh} open={open} onClose={()=>setOpen(false)}/>}
                </AnimatePresence>
                    {shareOpen && <ShareBrain shareBrain={shareBrain} text="" open={shareOpen} onClose={()=>setShareOpen(false)}/>}
        </div>
        </div>

    )
}