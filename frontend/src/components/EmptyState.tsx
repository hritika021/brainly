import {motion} from 'motion/react'
import folder from '../assets/fileIllustration.webp'
import type React from 'react'
interface openModal{
    openModal:()=>void
}

export function EmptyState(props:openModal){
    return (
        <div className="md:mt-16 mt-10 lg:px-36">
           <div className='bg-white border-pink-200 border rounded-2xl px-2 shadow-md lg:shadow-lg h-auto pb-8 lg:pt-8 pt-2 flex flex-col items-center   '>
                <img className='w-48 md:w-56  ' src={folder}/>
<div className='text-center'>

    <h1 className=' text-xl lg:text-4xl font-[Inter] font-semibold'>Welcome to <span className="text-[#ed6390]">Brainly</span> !</h1>
<p className="font-[Inter] tracking-wide text-sm pt-2 text-[#565657]">Your second brain is empty right now.<br></br>
 </p>

 <p className="font-[Inter] tracking-wide text-sm pt-[6px] text-[#565657]">
    Save your first article, tweet or video <br className='hidden lg:block'></br>  to start organizing everything in one place. 
 </p>


 <motion.button 
 transition={{
    duration:0.18,
ease:"easeOut"
   }}
   whileHover={{
scale:1.03,
boxShadow:"0px 0px 9px rgba(0,0,0,0.3)",
   }}
   whileTap={{scale:0.97}}

   onClick={props.openModal}
 className="font-[Inter] bg-[#dd5781] text-white mt-6 px-4 py-2 rounded-md h">Add Your First Resource</motion.button>
</div>
           </div>
        </div>
    )
}