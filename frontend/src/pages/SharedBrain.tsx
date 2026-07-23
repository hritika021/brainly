import axios from "axios";
import { useParams } from "react-router-dom"

export function SharedBrain(){
const hash=useParams();
const handleShare=async()=>{
    try{
const response= await axios.get(``)

    }
    catch(e){

    }

}



    return (
        <div>

        </div>
    )
}