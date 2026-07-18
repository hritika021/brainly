import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { BACKEND_URL } from "../config";
import { Card } from "./Card";

export function Search(){

const [content,setContent]=useState([]);
const [input,setInput]=useState("");

const [searchParams]=useSearchParams();

const type=searchParams.get("type");

async function refresh(){

try{

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

<div className="bg-gray-100 min-h-screen p-5">

{!type && (
<input
value={input}
onChange={(e)=>setInput(e.target.value)}
placeholder="Search by title..."
className="mt-10  p-[15px] border rounded-lg"
/>
)}

{
input.trim() &&
content.length===0 &&
!type &&
(
<div className="text-center mt-10">
No results found
</div>
)
}
{
    type && content.length===0 && (
        <div className="text-center mt-10">
            No results found for {type}
        </div>
    )
}
<div className="grid grid-cols-2 md:grid-cols-3">

{content.map((item:any)=>(

<Card
key={item._id}
refresh={refresh}
_id={item._id}
title={item.title}
type={item.type}
link={item.link}
/>

))}

</div>

</div>

)

}

