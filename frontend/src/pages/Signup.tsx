import { Input } from "../components/Input"
import { CrossIcon } from "../icons/CrossIcon"
import { useRef, useState } from "react";
import axios from "axios";
import {motion} from 'motion/react'
import {BACKEND_URL} from '../config'
import { useNavigate } from "react-router-dom";
export const Signup=()=>{

const usernameRef=useRef<any>(null);
const passwordRef=useRef<any>(null);
const [error,setError]=useState("");
const navigate=useNavigate();
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
     const response=await axios.post(BACKEND_URL +"/auth/signup",{
    
            username,
            password
    
    })
    localStorage.setItem("token",response.data.token)
 
    navigate("/")
}
catch(err:any){
    setError(err.response?.data?.msg || "Something went wrong"  )
}
}



    return (
         <div className="z-50 fixed inset-0  flex items-center justify-center p-8 ">
{/*                
               <div className={`absolute fixed inset-0 w-screen h-screen bg-black/30 top-0 left-0 backdrop-blur-sm `} >
                   </div> */}
               <div className=" bg-white rounded-md shadow-lg w-[420px] p-5 sm:p-8">
               
                   
                       <h2 className="font-semibold text-xl">Join Brainly</h2>
                       <p className="text-[13px] text-gray-700 ">Everything you think, saved and organized</p>

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
}} className="bg-black text-white hover:bg-gray-300 hover:text-black w-full  mt-5 rounded-md p-2" onClick={handleSignup}>Register</motion.button>
<span className="text-gray-700 flex-col items-center  flex sm:flex justify-center mt-4 ">
    Already have an account?
    <a href="/signin" className="text-blue-500 hover:underline ml-1 flex justify-center"> Sign in</a></span>
               </div>
               
       
       
       
       
       
       
       
           
               </div>
    )
}