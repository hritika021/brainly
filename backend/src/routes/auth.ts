import express from 'express'
import z from 'zod';
import bcrypt from 'bcrypt'
import User from '../models/userModel.js';
import jwt from 'jsonwebtoken'
const router=express.Router();

router.post('/signup',async(req,res)=>{
    try{
        console.log("Body: ",req.body)
const userSchema=z.object({
    username:z.string().min(3).max(10), 
    password:z.string().min(8).max(20)
})
type UserType=z.infer<typeof userSchema>

const result=userSchema.safeParse(req.body);
if(!result.success){
    console.log(result.error)
    return res.status(411).json({
        msg:"Incorrect inputs"
    })
}
const {username,password}:UserType=result.data;
const user=await User.findOne({username})
console.log("User found: ",user);
if(user){
    return res.status(403).json({msg:"User already exists"})
}
const hashedPassword= await bcrypt.hash(password,10); 
const newUser=await User.create({
username,password:hashedPassword
})

console.log(newUser)

const token= jwt.sign({userId:newUser._id},process.env.JWT_SECRET as string)
return res.status(200).json({
msg:"User created successfully",
token
})
} 
catch(err){
    console.error(err);
    return res.status(500).json({
        msg:"Internal server error"
    })
}
})

router.post('/signin',async(req,res)=>{ 
    const signinSchema=z.object({
        username:z.string().min(3).max(10),
        password:z.string().min(8).max(20),
    })

    const result=signinSchema.safeParse(req.body);
    if(!result.success){
        return res.status(411).json({msg:"Incorrect inputs"});

    }
    
    const {username,password}=result.data;
    const findUser=await User.findOne({username});
    if(!findUser){
        return res.status(403).json({msg:"User doesn't exist"});

    }

    const isPassword=await bcrypt.compare(password,findUser.password);
    if(!isPassword){
        return res.status(403).json({msg:"Incorrect username or password"})
    }
    const token=jwt.sign({userId:findUser._id},process.env.JWT_SECRET as string);
return res.status(200).json({
    msg:"Signin successful",
    token

})
    
})


export default router;
