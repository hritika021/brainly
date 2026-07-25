import axios from "axios";
import { useParams } from "react-router-dom"
import { BACKEND_URL } from "../config";
import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { useContent } from "../hooks/useContent";
import { Book, BookA, BookAIcon, BookOpen, BookOpenCheck, FileText, Newspaper, Play, Video } from "lucide-react";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FilterButton } from "../components/ShareButton";
import type { Content } from "../components/content";
import { AnimatePresence,motion } from "motion/react";

export function SharedBrain(){
    const {hash}=useParams();
    const [username,setUsername]=useState("")
    const [content,setContent]=useState<Content[]>([]);
    const [active,setActive]=useState("all");
  
    //@ts-ignore
    const articles=content.filter(item=>item.type==="article").length;
    //@ts-ignore
    const youtube=content.filter(item=>item.type==='youtube').length;
    //@ts-ignore
    const twitter=content.filter(item=>item.type==="twitter").length;
    //@ts-ignore
    const all=articles+youtube+twitter

    const {refresh}=useContent()
    
        const handleShare=async()=>{
       try{ const response=await axios.get(`${BACKEND_URL}/content/brain/${hash}`)
        console.log(response);
    setUsername(response.data.username);
setContent(response.data.content)}
        catch(e){
            console.error(e)
        }
    }
    useEffect(()=>{
        handleShare()
    },[])
   
   //@ts-ignore
    const filteredContent= active==='all'?content:(content.filter((item)=>item.type===active))

const containerVariants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
    },
  },
};
    return(
        <div className=' min-h-screen  bg-[#fdf7fa]'>
<div className="flex flex-col items-center pt-5">
    <h1 className="font-[Inter] tracking-wider text-[#df5a84] font-semibold">SHARED BRAIN</h1>
</div>
<div className="px-2">
    
<div className="
relative
overflow-hidden
rounded-3xl
border border-pink-200
bg-gradient-to-r
from-pink-50
via-white
to-pink-50
px-5   py-5 md:py-7
mt-2 
">
    <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-pink-200/20 blur-3xl"></div>

<div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-rose-200/20 blur-3xl"></div>

<div className="relative z-10 ">
<h1 className='font-[Inter] text-xl font-medium'>
    {username}'s Brain
</h1>
<p className='leading-snug tracking-tight  pt-2 text-sm  font-medium text-[#535356]'>A curated collection of articles,videos and tweets </p>
<h1></h1>
<div className='inline-flex font-medium  items-center gap-1 py-1  bg-[#fde7ef] text-[#ee427f] rounded-lg px-3 mt-2 '>
<BookOpen size={18}/>
<span className="text-sm">{all} Resources</span>
</div>

<div className="flex  justify-between font-[Inter] md:justify-start md:gap-14 lg:gap-16 mt-6">
  <div className="flex flex-col items-center">
    <div className="flex items-center gap-1 sm:gap-2 font-[Inter]">
      <Book className="w-4 h-4 sm:w-5 sm:h-5 text-pink-500" />
      <span className="text-lg sm:text-2xl font-bold">{all}</span>
    </div>
    <span className="font-[Inter] text-[10px] sm:text-[14px] text-gray-500">
      Resources
    </span>
  </div>

  <div className="flex flex-col items-center">
    <div className="flex items-center gap-1 sm:gap-2">
      <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-pink-500" />
      <span className="text-lg sm:text-2xl font-bold">{articles}</span>
    </div>
    <span className="text-[10px] sm:text-sm  sm:text-[14px] text-gray-500">
      Articles
    </span>
  </div>

  <div className="flex flex-col items-center">
    <div className="flex items-center gap-1 font-[Inter]">
      <Play className="w-4 h-4 sm:w-5 sm:h-5 text-pink-500" />
      <span className="text-lg sm:text-2xl font-bold">{youtube}</span>
    </div>
    <span className="text-[10px] sm:text-sm  sm:text-[14px] text-gray-500">
      YouTube
    </span>
  </div>

  <div className="flex flex-col items-center">
    <div className="flex items-center gap-1 sm:gap-2">
      <FontAwesomeIcon icon={faXTwitter} className="w-4 h-4 sm:w-5 sm:h-5 text-pink-500" />
      <span className="text-lg sm:text-2xl font-bold">{twitter}</span>
    </div>
    <span className="text-[10px] sm:text-[14px] sm:text-sm text-gray-500">
      Twitter
    </span>
  </div>
</div>
</div>


    </div>



    <div className="flex px-2 mt-4 gap-2 md:gap-6">
<FilterButton onClick={()=>{
setActive('all')
}} isActive={active==='all'} text="All"/>

<FilterButton onClick={()=>{
    setActive("youtube")

}} isActive={active==='youtube'} text="Youtube"/>

<FilterButton onClick={()=>{
setActive('article')
}} isActive={active==='article'} text="Article"/>

<FilterButton onClick={()=>{
    setActive("twitter")

}} isActive={active==="twitter"} text="Twitter"/>



</div>
<AnimatePresence mode="popLayout">
   {filteredContent.length===0
    ?(
  <div className="flex justify-center px-6 lg:px-8  pt-12">
  <div className="w-full rounded-xl border-2 border-pink-200 bg-white py-10 text-center font-[Inter] ">
    <h2 className="text-lg md:text-xl font-semibold text-gray-800">
      No content found for this filter
    </h2>
    <p className="mt-2 text-sm md:text-base text-gray-500">
      Try selecting a different filter.
    </p>
  </div>
</div>
    ):( <motion.div 
key={active}
  variants={containerVariants}
 initial="hidden"   animate="visible" 
    className="grid px-5 items-start grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">

 {filteredContent.map((item)=>(
   <motion.div key={item._id} variants={cardVariants} layout
  >
     <Card 
    isShare={false}
     key={item._id}
    title={item.title}
    link={item.link}
    refresh={refresh}
    _id={item._id}
    type={item.type}/>
   </motion.div>
  ))} 
</motion.div>)
   }
</AnimatePresence>
</div>

        </div>
    )
}