import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const YoutubeIcon=({className}:{className?:string})=>{

return (
   <div>
     <FontAwesomeIcon icon={faYoutube} className={` ${className} = size-5`}/>
   </div>
)
}