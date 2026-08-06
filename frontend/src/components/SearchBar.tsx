import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { BACKEND_URL } from "../config";
import { Card } from "./Card";
import { Button } from "./Button";
import { PlusIcon, ShareIcon } from "lucide-react";
import { NoResult } from "./NoResult";
import { stagger,motion, AnimatePresence } from "motion/react";
import { ShareBrain } from "./ShareBrain";
import { CreateContent } from "./CreateContentModal";

export function Search(){

const [content,setContent]=useState([]);
const [input,setInput]=useState("");
const [loading,setLoading]=useState(false)
const [searchParams]=useSearchParams();
const [open,setOpen]=useState(false);
const [shareOpen,setShareOpen]=useState(false)

const type=searchParams.get("type");
const showNoResults =
    !loading &&
    content.length === 0 &&
    (input.trim() !== "" || type);
    const containerVariants = {
  hidden: {},
  show: {
    transition: {
      delayChildren: stagger(0.1),
    },
  },
};

// const cardVariants = {
//   hidden: {
//     opacity: 0,
//     y: 20,
//   },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.45,
//     },
//   },
// };
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

{showNoResults && ( <div className="mt-12 lg:36">
        <NoResult />
    </div>)}
{!showNoResults &&(<motion.div variants={containerVariants} initial="hidden"
    animate="show"
className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-5">

{loading ? (
    <div className="col-span-full flex justify-center items-center py-24">
        <div className="h-10 w-10 border-4 border-pink-200 border-t-[#dd5781] rounded-full animate-spin" />
    </div>
) : (
    <AnimatePresence mode="popLayout">
       { content.map((item: any) => (
        <Card
        isShare={true}
            key={item._id}
            refresh={refresh}
            _id={item._id}
            title={item.title}
            type={item.type}
            link={item.link}
        />
    ))}
    </AnimatePresence>
)}

</motion.div>)}

<AnimatePresence>
    {open && (
        <CreateContent
            refresh={refresh}
            open={open}
            onClose={() => setOpen(false)}
        />
    )}
</AnimatePresence>

{shareOpen && (
    <ShareBrain
        shareBrain={shareBrain}
        text=""
        open={shareOpen}
        onClose={() => setShareOpen(false)}
    />
)}
</div>

)

}

