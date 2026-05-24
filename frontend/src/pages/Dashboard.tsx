import { useState } from "react"
import { Button } from "../components/Button"
import { Card } from "../components/Card"
import { PlusIcon } from "../icons/PlusIcon"
import { ShareIcon } from "../icons/ShareIcon"
import { CreateContent } from "../components/CreateContentModal"
import { Sidebar } from "../components/Sidebar"
import { ShareBrain } from "../components/ShareBrain"

export const Dashboard=()=>{
const [open,setOpen]=useState(false);
const [shareOpen,setShareOpen]=useState(false);

    return (
        <div >
            <Sidebar className={'absolute'}/>
        <div className="p-4 relative md:ml-48 min-h-screen"> 
          <div  className='flex gap-4 justify-end'> 
             <Button variant='primary' onClick={()=>{setOpen(true)}} text='Add Content' startIcon={<PlusIcon/>}/>
          <Button variant='secondary' onClick={()=>{setShareOpen(true)}} text='Share Brain' startIcon={<ShareIcon className="size-6"/>}/>
        </div>
   
        <div className="flex gap-2"><Card type="twitter" title="First tweet" link="https://x.com/cbajpai7/status/2041116132397215788"/>
     
        <Card type="youtube" title="First Video" link="https://www.youtube.com/watch?v=ENmCaY5M3v4"/>
        </div>
                {open && <CreateContent open={open} onClose={()=>setOpen(false)}/>}
                    {shareOpen && <ShareBrain text="" open={shareOpen} onClose={()=>setShareOpen(false)}/>}
        </div>
        </div>

    )
}