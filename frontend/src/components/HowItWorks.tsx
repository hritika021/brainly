import { Bookmark, FolderOpen, Search } from "lucide-react"
import {motion} from 'motion/react'
import { container, fadeUp } from "./Hero"
export function HowItWorks(){

const steps = [
  {
    icon: Bookmark,
    title: "Save",
    description: "Save articles, tweets, videos or bookmarks with one click.",
  },
  {
    icon: FolderOpen,
    title: "Organize",
    description: "Brainly automatically organizes and tags everything for you.",
  },
  {
    icon: Search,
    title: "Find",
    description: "Search your entire knowledge base in milliseconds.",
  },
]
return (
  <motion.section variants={container} initial="hidden" whileInView='visible' viewport={{once:true, amount:0.2}} id="how-it-works"    className="relative overflow-hidden py-28 bg-[#FCFAFB]">
         <div className="absolute left-1/2 top-0 h-[420px] w-[850px] -translate-x-1/2 rounded-full bg-pink-200/20 blur-[130px]" />

      <div className="absolute left-10 top-48 h-32 w-32 rounded-full bg-pink-100/40 blur-[80px]" />
      <div className="absolute right-16 bottom-20 h-44 w-44 rounded-full bg-pink-200/30 blur-[90px]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="text-center">
            <motion.p variants={fadeUp} className="mb-4 tracking-[0.35em] uppercase text-[#dd5781] font-semibold text-sm">HOW IT WORKS</motion.p>
 <motion.h2 variants={fadeUp} className="md:text-5xl text-4xl  font-semibold font-[Inter] text-slate-900 leading-tight">
            Simple steps,
            <br />
            <motion.span variants={fadeUp} className="font-[Merriweather] italic text-[#dd5781]">
              powerful results.
            </motion.span>
          </motion.h2>
             <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-2xl text-lg text-slate-500">
            Brainly automatically organizes your content so you can focus on
            what matters.
          </motion.p>
        
        </div>

        <div className="relative  mt-24">
          <motion.div
  initial={{ clipPath: "inset(0 100% 0 0)" }}
  whileInView={{ clipPath: "inset(0 0% 0 0)" }}
          viewport={{once:true}}
          transition={{
              duration: 1.2,
    ease: [0.16, 1, 0.3, 1],
          }}
          style={{ transformOrigin: "left" }}
          
          className="absolute left-[17%] right-[17%] top-8  h-[2px] border-t-2 border-dashed border-pink-300" />
<div className="grid grid-cols-3 gap-10">
{steps.map((step,index)=>{
    const Icon=step.icon
    return(
        <motion.div key={step.title}
        className="relative flex flex-col items-center text-center ">
        
        <div className="relative ">
          <div className="absolute inset-0 rounded-full bg-pink-300/30 blur-2xl" />

                    <motion.div
                    initial={{ opacity: 0, scale: 0 }}
whileInView={{ opacity: 1, scale: 1 }}
transition={{
  delay: 0.2+index*0.25,
  duration: 0.35,
  ease: [0.34, 1.56, 0.64, 1],
}}

viewport={{once:true}}
                      className="
                        relative
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-pink-100
                        bg-white
                        shadow-[0_10px_40px_rgba(221,87,129,0.08)]
                        transition
                        duration-300
                        hover:-translate-y-2
                        hover:shadow-[0_18px_55px_rgba(221,87,129,0.18)]
                        
                      "
                    >
                      <Icon size={44} className="text-[#dd5781]"  />
                      

                    </motion.div>
                     

        </div>
              <motion.div
              variants={fadeUp}
              
              className="mt-8 flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 text-xl font-semibold text-[#dd5781]">
                    {index + 1}
                  </motion.div>
                    <motion.h3 variants={fadeUp} className="mt-5 text-xl font-[Inter] font-semibold text-slate-900">
                    {step.title}
                  </motion.h3>
<motion.p variants={fadeUp} className="mt-3 max-w-xs text-base leading-8 text-slate-500">
                    {step.description}
                  </motion.p>

        </motion.div>
    )
})}
</div>
        </div>
<motion.div variants={fadeUp} className="mx-auto mt-24 max-w-3xl rounded-full border border-pink-100 bg-white px-8 py-5 shadow-sm">

          <motion.p variants={fadeUp} className="text-center text-lg text-slate-500">
            From saving a tweet to finding it months later,
            <span className="font-semibold text-[#dd5781]">
              {" "}
              Brainly keeps everything organized automatically.
            </span>
          </motion.p>

        </motion.div>
      </div>
  </motion.section>
)
}