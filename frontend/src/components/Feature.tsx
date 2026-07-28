import type React from "react"
import type { ReactElement } from "react"

interface FeatureProp{
    text:string,
    icon:React.ReactNode}

export const Feature=(props:FeatureProp)=>{
    return (

  <div className="flex items-center gap-2 ">
      <span className="text-[#dd5781]">{props.icon}</span>
      <span className="font-medium">{props.text}</span>
    </div>
    )
}