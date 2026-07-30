import { ArrowRight } from "lucide-react";
import { Button } from "../components/Button"; 
import {motion} from 'motion/react'
import { container, fadeUp } from "./Hero";
export function CTA() {
  return (
    <motion.section variants={container}   initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }} className="relative overflow-hidden bg-[#FCFAFB] py-32">

      <div className="absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full  bg-pink-300/60 blur-[150px]"  />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <motion.div variants={fadeUp} className="rounded-[40px] border border-pink-100 bg-white/80 backdrop-blur-xl px-8 py-16 shadow-[0_20px_60px_rgba(221,87,129,0.08)]">

          <div className="text-center">

            <motion.p variants={fadeUp} className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#dd5781]">
              START TODAY
            </motion.p>

            <motion.h2 variants={fadeUp} className="text-4xl font-semibold font-[Inter] leading-tight text-slate-900 md:text-6xl">
              Ready to build your
              <br />
              <span className="font-[Merriweather] italic text-[#dd5781] tracking-wide ">
                second brain?
              </span>
            </motion.h2>

            <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-500">
              Capture ideas, organize knowledge and rediscover everything
              effortlessly—all in one beautiful workspace.
            </motion.p>

            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
<motion.button variants={fadeUp} className='flex items-center bg-[#df5983]  px-6 text-white py-4 rounded-lg font-[Inter] text-xl'>
                Get Started
                <ArrowRight
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  size={18}
                />
              </motion.button>

             
            </div>

          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}