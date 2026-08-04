
import { AnimatePresence } from "motion/react";
import { CTA } from "../components/CTA";
import { Features } from "../components/Features";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { HowItWorks } from "../components/HowItWorks";
import { Navbar } from "../components/Navbar";
import { Signin } from "../components/Signin";
import { Signup } from "../components/Signup";
import { useAuth } from "../context/AuthContext";

export function Landing(){
  const {authModel,closeModal}=useAuth()
  return (
      <div className="min-h-screen bg-[#fef7f9] relative overflow-x-hidden">
        <Navbar/>
        <Hero/>
        <Features/>
        <HowItWorks/>
        <CTA/>
        <Footer/>

       <AnimatePresence>
         {
          authModel==="signin" &&(
            <Signin key="signin" onClose={closeModal}/>
          )
        }

        {
          authModel==='signup' &&(
            <Signup key="signup" onClose={closeModal}/>
          )
        }
       </AnimatePresence>
    </div>
  )
}