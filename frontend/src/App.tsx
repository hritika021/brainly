import React from "react"
import { ButtonComp } from "./components/Button"
import { PlusIcon } from "./icons/PlusIcon"
import { ShareIcon } from "./icons/ShareIcon"

function App() {
 

  return (
    <div>
<div className="flex gap-6">
  <ButtonComp variant='primary' size="md" onClick={()=>{}} text="Share your brain" startIcon={<ShareIcon/>} endIcon={"kasmdkbd"}/>
<ButtonComp variant="secondary" size="md" onClick={()=>{}} text="Add Content" startIcon={<PlusIcon size="lg"/>} />
</div>

    </div>
  )
}

export default App
