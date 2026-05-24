import { useRef, useState } from "react";
import { Input } from "../components/Input"
import { CrossIcon } from "../icons/CrossIcon"
import { useNavigate } from "react-router-dom";


import axios from "axios";
import { BACKEND_URL } from "../config";

export const Signin=()=>{
    const usernameRef=useRef<any>(null);
const passwordRef=useRef<any>(null);
const [error,setError]=useState("");
async function handleSignin(){
    const username=usernameRef.current?.value;
    const password=passwordRef.current?.value;
    if(!username || !password){
        setError("Please fill all the fields!")
        return;
    }
    if(username.length<3 || username.length>10){
        setError("Username must be between 3 and 10 characters")
        return;
    }
    if(password.length<6 || password.length>20){
        setError("Password must be between 6 and 20 characters")
        return;
    }
   try{
    const response= await axios.post(BACKEND_URL +"/auth/signin",{
            username,password
    })

    console.log(response.data)

console.log("username",username,"password",password)
   const jwt=response.data.token;
   localStorage.setItem("token",jwt);
   navigate("/");
   }

    catch(err:any){
        console.log(err.response.data.msg)
        setError(err.response?.data?.msg || "Something went wrong")
    }
    

}
const navigate=useNavigate();
    return (
         <div className="z-50 fixed inset-0  flex items-center justify-center ">
{/*                
               <div className={`absolute fixed inset-0 w-screen h-screen bg-black/30 top-0 left-0 backdrop-blur-sm `} >
                   </div> */}
               <div className=" bg-white rounded-md shadow-lg w-[410px] p-[22px]">
               
                   
                       <h2 className="font-semibold text-xl">Welcome back</h2>
                       <p className="text-[13px] text-gray-700 ">Sign in to continue</p>
                       {error && (
                           <div className="text-sm text-red-500 mt-3 bg-red-100/60 border-red-300 p-1 rounded-sm font-semibold border">
                               {error}
                           </div>
                       )}
                   <Input ref={usernameRef} type="text" placeholder="Username"  label="Username"/>
                   <Input ref={passwordRef} type="password" placeholder="•••••••"  label="Password"/>
              <div className="text-sm text-gray-700">Minimum 6 characters</div>

<button onClick={handleSignin} className="bg-black text-white w-full  mt-5 rounded-md p-2">Sign in</button>
<span className="text-gray-700 flex justify-center mt-3">New here?
    <a href="/signup" className="text-blue-500 hover:underline ml-1"> Sign up</a></span>
               </div>
               
       
       
       
       
       
       
       
           
               </div>
    )
}