import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { BACKEND_URL } from "../config";
import { Card } from "./Card";
import { Button } from "./Button";
import { PlusIcon, ShareIcon } from "lucide-react";

export function Search(){

const [content,setContent]=useState([]);
const [input,setInput]=useState("");
const [loading,setLoading]=useState(false)
const [searchParams]=useSearchParams();
const [open,setOpen]=useState(false);
const [shareOpen,setShareOpen]=useState(false)

const type=searchParams.get("type");

async function refresh(){

try{
setLoading(true);
let response;

if(type){
    

response=await axios.get(
`${BACKEND_URL}/content/filter?type=${type}`,
{
headers:{
Authorization:`Bearer ${localStorage.getItem("token")}`
}
}
);

}else{

if(!input.trim()){
const response=await axios.get(`${BACKEND_URL}/content`,{
    headers:{
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }
})
setContent(response.data.content)
return;
}

response=await axios.get(
`${BACKEND_URL}/content/search?filter=${input}`,
{
headers:{
Authorization:`Bearer ${localStorage.getItem("token")}`
}
}
);

}

setContent(response.data.content);

}catch(err){
console.log(err);
}
finally{
    setLoading(false);
}

}

useEffect(()=>{

const timeout=setTimeout(()=>{
refresh();
},500);

return ()=>{
clearTimeout(timeout)
}

},[input,type]);

return(

<div className="bg-[#fdf7fa] min-h-screen px-6 py-6">
 <div className="flex  justify-center md:justify-end gap-3 md:gap-5 mr-2">
                 <Button  variant='primary' onClick={()=>{setOpen(true)}} text='Add Content' startIcon={<PlusIcon/>} className={""}/>
          <Button variant='secondary' onClick={()=>{setShareOpen(true)}} text='Share Brain' startIcon={<ShareIcon className="size-4 md:font-medium"/>} className="gap-1"/>
            </div>
{!type && (
<input
value={input}
onChange={(e)=>setInput(e.target.value)}
placeholder="Search by title..."
className="mt-10  p-[15px] border rounded-lg"
/>
)}

{
!loading && input.trim() &&
content.length===0 &&
!type &&
(
<div className="text-center mt-10">
No results found
</div>
)
}
{
   !loading && type && content.length===0 && (
        <div className="text-center mt-10">
            No results found for {type}
        </div>
    )
}
<div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-5">

{loading ? (
    <div className="col-span-full flex justify-center items-center py-24">
        <div className="h-10 w-10 border-4 border-pink-200 border-t-[#dd5781] rounded-full animate-spin" />
    </div>
) : (
    content.map((item: any) => (
        <Card
        isShare={true}
            key={item._id}
            refresh={refresh}
            _id={item._id}
            title={item.title}
            type={item.type}
            link={item.link}
        />
    ))
)}

</div>

</div>

)

}

