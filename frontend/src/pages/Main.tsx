import { Button } from "../components/Button"
import { Card } from "../components/Card"
import { PlusIcon } from "../icons/PlusIcon"
import { ShareIcon } from "../icons/ShareIcon"

export const Main=()=>{
    return (
        <div className="pt-5"> 
          <div  className='flex gap-4 justify-end'>  <Button variant='primary' onClick={()=>{}} text='Add Content' startIcon={<PlusIcon/>}/>
          <Button variant='secondary' onClick={()=>{}} text='Share Brain' startIcon={<ShareIcon className="size-6"/>}/>
        </div>
   
        <div className="flex"><Card type="twitter" title="Project ideas" link="https://twitter.com/cbajpai7/status/2041116132397215788"/>
     
        <Card type="youtube" title="Project ideas" link="https://www.youtube.com/watch?v=ENmCaY5M3v4"/>
        </div>
        </div>
    )
}