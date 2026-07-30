import { faGithub, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {motion} from 'motion/react'
import { container, fadeUp } from "./Hero";
export const Footer=()=> {

const rowContainer={
  hidden:{},
  visible:{
    transition:{
      staggerChildren:0.2
    }
  }
}

  return (
    <motion.footer variants={container} initial="hidden" whileInView='visible' viewport={{once:true, amount:0.2}}  className="relative overflow-hidden bg-[#FCFAFB] pb-10 ">

      <div className="mx-auto mb-20 h-px max-w-7xl bg-gradient-to-r from-transparent via-pink-200 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">

        <div className="flex flex-col items-center text-center">

          <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-slate-900">
            Brain
            <span className="font-playfair italic text-[#dd5781]">
              ly
            </span>
          </motion.h2>

          <motion.p variants={fadeUp}  className="mt-5 max-w-lg text-slate-500 ">
            Your second brain for saving articles, videos, tweets and ideas—
            beautifully organized and always within reach.
          </motion.p >

      
          <motion.div variants={rowContainer} initial="hidden" whileInView="visible" viewport={{once:true}} className="mt-8 flex gap-5">

            <motion.a variants={fadeUp}
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-pink-100 bg-white transition hover:-translate-y-1 hover:border-pink-300 hover:shadow-lg"
            >
         <FontAwesomeIcon icon={faLinkedin}/>
            </motion.a>

            <motion.a variants={fadeUp}
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-pink-100 bg-white transition hover:-translate-y-1 hover:border-pink-300 hover:shadow-lg"
            >
              <FontAwesomeIcon icon={faGithub}/>
            </motion.a>

            <motion.a variants={fadeUp}
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-pink-100 bg-white transition hover:-translate-y-1 hover:border-pink-300 hover:shadow-lg"
            >
              <FontAwesomeIcon icon={faXTwitter} />
            </motion.a>

          </motion.div>

        </div>

      
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-pink-100 pt-8 text-sm text-slate-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} Brainly. All rights reserved.
          </p>

          <p>
            Crafted with <span className="text-[#dd5781]">♥</span> by Hritika.
          </p>

        </div>

      </div>
    </motion.footer>
  );
}