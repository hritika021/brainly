import { faXTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Book, BookOpen, FileText, Play } from "lucide-react"
import { HeroBadge } from "./HeroBadge"
import { color } from "motion/react"

interface HeroProps{
    totalResources:number,
    totalArticles:number,
    totalVideos:number,
    totalTweets:number,
    username:string
}



export function DashBoardHero(props:HeroProps){

    return (
       <div className="px-2">
    
<div className="
relative
overflow-hidden
rounded-3xl
border border-pink-200
shadow-md lg:shadow-lg
bg-gradient-to-r
    from-[#FFF8FA]
via-[#FCEBF2]
to-[#F8DCE8]
      shadow-[0_10px_35px_rgba(236,72,153,0.08)]
to-pink-50
px-5   py-5 md:py-7
mt-2 
">
    <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-pink-200/20 blur-3xl"></div>

<div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-rose-200/20 blur-3xl"></div>

<div className="relative z-10 ">
    <h1 className='font-[Inter] text-lg md:text-xl lg:text-2xl font-medium '>
   Welcome back, {props.username} 👋
</h1>
<p className='leading-snug tracking-tight hidden md:block pt-2 text-sm  font-medium text-[#535356]'>Your second brain for saving and organizing important content. </p>
<h1></h1>

<div className="flex    lg:flex hidden font-[Inter] gap-10  mt-6">
<HeroBadge value={props.totalResources} text="Resources" icon={<Book fill="#fac9d9"/>}/>
<HeroBadge value={props.totalArticles} text="Articles" icon={<FileText fill="#fac9d9"/>}/>
<HeroBadge icon={<Play fill="#fac9d9"/>} value={props.totalVideos} text="Videos"/>
<HeroBadge icon={<FontAwesomeIcon className="text-pink-500"   icon={faXTwitter}/>} value={props.totalTweets} text="Tweets"/>




    </div>
    </div></div>
    </div>
 

    )
}