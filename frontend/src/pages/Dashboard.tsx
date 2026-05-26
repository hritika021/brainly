import { useState } from "react"
import { Button } from "../components/Button"
import { Card } from "../components/Card"
import { PlusIcon } from "../icons/PlusIcon"
import { ShareIcon } from "../icons/ShareIcon"
import { CreateContent } from "../components/CreateContentModal"
import { Sidebar } from "../components/Sidebar"
import { ShareBrain } from "../components/ShareBrain"
import { useContent } from "../hooks/useContent"

export const Dashboard=()=>{
const [open,setOpen]=useState(false);
const [shareOpen,setShareOpen]=useState(false);
const content=useContent();

    return (

        <div >
            <Sidebar className={'absolute'}/>
        <div className="p-4 relative md:ml-48 min-h-screen bg-gray-200"> 
          <div  className='flex gap-4 justify-end'> 
             <Button variant='primary' onClick={()=>{setOpen(true)}} text='Add Content' startIcon={<PlusIcon/>}/>
          <Button variant='secondary' onClick={()=>{setShareOpen(true)}} text='Share Brain' startIcon={<ShareIcon className="size-6"/>}/>
        </div>
   
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 items-start">

          {content.map(({type,link,title}) => {
    return (
     <div >
   <Card
            type={type}
            link={link}
            title={title}
        />     </div>
    )
})}
     
      </div> 
                {open && <CreateContent open={open} onClose={()=>setOpen(false)}/>}
                    {shareOpen && <ShareBrain text="" open={shareOpen} onClose={()=>setShareOpen(false)}/>}
        </div>
        </div>

    )
}