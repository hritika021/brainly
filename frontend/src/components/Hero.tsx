import { ArrowRight, Bookmark, CheckCircle, FolderOpen, Link2, Lock, Play, Sparkle, Sparkles } from "lucide-react";
import { FloatingIcon } from "./FloatingIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { Feature } from "./Feature";
import dashboard from '../assets/dashboard.png'  
import {motion} from 'motion/react'

  export const fadeUp = {
  hidden: {
    opacity: 0,
    y:35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.0,
   ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

  export const featureContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
export function Hero(){

  

    return (
      
  <section id="about"className="relative  overflow-hidden lg:pt-32 pt-24 pb-16">
    
<div className="absolute left-1/2 top-0 h-[650px] w-[900px] -translate-x-1/2 rounded-full bg-pink-200/20 blur-[130px]" />

      <div className="absolute -left-48 top-52 h-[420px] w-[420px] rounded-full bg-pink-300/20 blur-[120px]" />

      <div className="absolute -right-40 top-72 h-[420px] w-[420px] rounded-full bg-rose-200/20 blur-[120px]" />

      <div className="absolute bottom-0 left-1/2 h-[550px] w-[1000px] -translate-x-1/2 rounded-full bg-pink-100/20 blur-[150px]" />


      <FloatingIcon
        className="left-[12%] top-44 hidden lg:flex"
        icon={<Bookmark fill="#fbd4e3" size={34} />}
      />

      <FloatingIcon
        className="left-[12%] top-[370px] hidden lg:flex"
        icon={<Link2 fill="#fbd4e3" size={34} />}
      />

      <FloatingIcon
      
        className="right-[15%] top-48 hidden lg:flex"
        icon={<Play fill="#fbd4e3" size={34} />}
      />

      <FloatingIcon
        className="right-[10%] top-[400px] hidden lg:flex"
        icon={<FontAwesomeIcon icon={faXTwitter} className="size-[34px] " />}
      />

      <motion.div
        variants={container}
  initial="hidden"
  animate="visible"
      className="relative z-10 mx-auto max-w-4xl px-6 flex flex-col items-center">
  <motion.div
    variants={fadeUp}
          className="mx-auto mb-4 lg:mb-8 flex w-fit shadow-sm items-center gap-1 px-3 rounded-full border border-pink-100 bg-white/70  lg:px-5  py-3 mt-5 md:mt-6 backdrop-blur-xl">

          <Sparkles
            className="text-[#dd5781]"
            size={16}
          />
          <p 
       
          className="text-[12px] lg:text-sm font-[Inter] font-medium text-[#dd5781]">
    Your Knowledge, Organized Beautifully
          </p>

        </motion.div>
       <motion.h1
  className="mx-auto max-w-6xl lg:leading-[1.05] font-[Inter] text-center text-3xl font-bold leading-tight text-[#111827] md:text-5xl tracking-tight"
>
  <motion.span
    variants={fadeUp}
    className="block"
  >
    Save it. Organize it.
  </motion.span>

  <motion.span
    variants={fadeUp}
    className="block bg-gradient-to-r from-[#dd5781] to-pink-400 bg-clip-text text-transparent"
  >
    Never lose it.
  </motion.span>
</motion.h1>

        <motion.p
        variants={fadeUp}
        className="mx-auto mt-3 max-w-3xl text-center text-sm md:px-32  font-[Inter] text-gray-500">

          Brainly helps you collect, organize and revisit your
          favorite articles, tweets, videos and resources—
          all in one beautiful place.

        </motion.p>

           <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">

          <motion.button 
          variants={fadeUp}
          className="flex items-center gap-3 rounded-2xl bg-[#dd5781]  px-6 md:px-8 py-3 md:py-[14px] text-lg font-semibold text-white shadow-[0_15px_35px_rgba(221,87,129,0.25)] transition hover:-translate-y-0.5 hover:bg-[#cc4e76]">

            Get Started

            <ArrowRight size={20} />

          </motion.button>

          <motion.button variants={fadeUp} className="rounded-2xl border border-pink-200 bg-white px-6 py-3 md:px-8 md:py-[14px] text-lg font-semibold text-gray-700 transition hover:bg-pink-50">
            See Live Demo
          </motion.button>

        </div>
        <motion.div variants={featureContainer} className="mt-6 md:mt-7 flex flex-wrap items-center justify-center gap-2 md:gap-8 text-gray-600">
    <motion.div variants={fadeUp}>
        <Feature 
            icon={<CheckCircle size={18} />}
            text="Save Anything"
          />
    </motion.div>

        <motion.div variants={fadeUp}>
            <Feature
            icon={<FolderOpen size={18} />}
            text="Organize Effortlessly"
          />
        </motion.div>

        <motion.div variants={fadeUp}>
            <Feature
            icon={<Lock size={18} />}
            text="Access Anywhere"
          />
        </motion.div>
        </motion.div>

      <motion.div variants={fadeUp} className="relative mx-auto mt-12 w-full max-w-full  md:max-w-[1150px] lg:max-w-[1250px]">
      <div
        className="
        absolute
        left-1/2
       top-32
        bottom-[-35px]
        -translate-x-1/2
        h-32
        w-[115%]
        rounded-full
        bg-pink-300/30
        blur-[110px]
        -z-10
        "
    />
  <div className="absolute -inset-6 -z-10 rounded-[40px] bg-pink-300/30 blur-3xl" />
       <div
        className="
        relative
        overflow-hidden
        rounded-[30px]
        border
        border-pink-100
        bg-white
        shadow-[0_25px_60px_rgba(0,0,0,0.08)]
        "
    ></div>
<img src={dashboard} className="rounded-xl  w-full h-auto scale:110"/>


    </motion.div>

</motion.div>
     
  </section>
    )
}