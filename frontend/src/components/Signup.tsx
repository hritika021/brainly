import { Input } from "./Input"

import { useRef, useState } from "react";
import axios from "axios";
import {motion} from 'motion/react'
import {BACKEND_URL} from '../config'
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";
export const Signup=({onClose}:{onClose:()=>void})=>{

const usernameRef=useRef<any>(null);
const passwordRef=useRef<any>(null);
const [error,setError]=useState("");
const [loading,setLoading]=useState(false);
const navigate=useNavigate();
const {openSignin}=useAuth()
async function handleSignup(){
    const username=usernameRef.current?.value;
    const password=passwordRef.current?.value;
   
    if(!username || !password){
      setError("Please fill all the fields!")
        return;
    }

    if(username.length<3 || username.length>10){
        setError("Username must be between 3 and 10 characters!")
        return;
    }

    if(password.length<6 || password.length>20){
        setError("Password must be between 6 and 20 characters")
        return;
    }
try{
    setLoading(true)
     const response=await axios.post(BACKEND_URL +"/auth/signup",{
    
            username,
            password
    
    })
      toast.success("Logged in successfully!",{
    duration:2000
  })
    localStorage.setItem("token",response.data.token);
    localStorage.setItem("username",username)
 
    navigate("/dashboard")
}
catch(err:any){
    setError(err.response?.data?.msg || "Something went wrong"  )
}
finally{
    setLoading(false)
}
}



    return (
      
             <div className='fixed inset-0 z-50 flex justify-center items-center'>
                <motion.div 
                initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        transition={{duration:0.2}}
                
                className="absolute backdrop-blur-sm fixed inset-0 w-screen h-screen bg-black/30 top-0 left-0" onClick={onClose}/>
                <div className="absolute -z-10 h-72 w-72 rounded-full bg-pink-300/20 blur-3xl" />
                  <motion.div 
                   initial={{
            scale:0.92,
            opacity:0,
            y:20
        }}

        animate={{
            scale:1,
            opacity:1,
            y:0
        }}
        exit={{
            scale:0.96,
            opacity:0,
            y:12
        }}
          transition={{
    type: "spring",
    stiffness: 300,
    damping: 24,
  }}

    onClick={(e) => e.stopPropagation()}
                  className=" bg-[#FFF9FB] border border-pink-100  overflow-hidden relative border-pink-200 rounded-md shadow-[0_20px_40px_rgba(221,87,129,0.18)] w-[420px] p-5 sm:p-8">
               
                   
                       <h2 className="font-semibold text-xl text-[#dd5781] font-[Inter] font-medium ">Join Brainly</h2>
                       <p className="text-[13px] text-gray-700 font-[Inter] ">Everything you think, saved and organized</p>

                       {error && (
                           <div className="text-sm text-red-500 mt-3 bg-red-100/60 border-red-300 p-1 rounded-sm font-semibold border">
                               {error}
                           </div>
                       )}
                   <Input type="text" placeholder="Username" ref={usernameRef} label="Username"/>
                   <Input type="password" placeholder="•••••••" ref={passwordRef} label="Password"/>
              <div className="text-sm text-gray-700">Minimum 6 characters</div>

<motion.button whileHover={{
    scale: 1.03
}}

whileTap={{
    scale: 0.97
}} className={`${loading?"bg-pink-300":""} bg-[#dd5781] brightness-105 hover:brightness-100
 text-white  font-[Inter]  w-full  mt-5 rounded-md p-2`} onClick={handleSignup}>{loading?"Creating Account...":"Create Account"}</motion.button>
<span className="text-gray-700 flex-co font-[Inter] items-center  flex md:flex-row justify-center mt-3">
    Already have an account?
    <span onClick={openSignin} className="text-pink-500 font-[Inter] hover:underline ml-1 flex justify-center"> Sign in</span></span>
               </motion.div>
             </div>
               

    )
}