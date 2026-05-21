import { Input } from "../components/Input"
import { CrossIcon } from "../icons/CrossIcon"

export const Signup=()=>{
    return (
         <div className="z-50 fixed inset-0  flex items-center justify-center ">
{/*                
               <div className={`absolute fixed inset-0 w-screen h-screen bg-black/30 top-0 left-0 backdrop-blur-sm `} >
                   </div> */}
               <div className=" bg-white rounded-md shadow-lg w-[420px] p-[26px]">
               
                   
                       <h2 className="font-semibold text-xl">Join Brainly</h2>
                       <p className="text-[13px] text-gray-700 ">Everything you think, saved and organized</p>
                   <Input type="text" placeholder="Username" onChange={()=>{}} label="Username"/>
                   <Input type="password" placeholder="•••••••" onChange={()=>{}} label="Password"/>
              <div className="text-sm text-gray-700">Minimum 6 characters</div>

<button className="bg-black text-white w-full  mt-5 rounded-md p-2">Register</button>
<span className="text-gray-700 flex justify-center mt-3">Already have an account?
    <a href="/Signin" className="text-blue-500 hover:underline"> Sign in</a></span>
               </div>
               
       
       
       
       
       
       
       
           
               </div>
    )
}