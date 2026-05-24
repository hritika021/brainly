import express from 'express';
import Content from '../models/contentModel.js';
import { authMiddleware } from '../authMiddleware.js';
import Link from '../models/linkModel.js';
import { random } from '../utils.js';
import User from '../models/userModel.js';

const router=express.Router();

router.post("/content",authMiddleware, async(req,res)=>{
    console.log("Hit the content route");
    //@ts-ignore
    console.log("REQ.User.Id: ",req.userId)
const link=req.body.link;
const type=req.body.type;
const title=req.body.title
await Content.create({
    link,
    type,
    title,
    //@ts-ignore
    userId:req.userId,
    tags:[]
})
//console.log(response)
return res.json({

    msg:"Content added"
})
})


router.get('/content',authMiddleware, async(req,res)=>{
    //@ts-ignore
    const userId=req.userId;
    const content=await Content.find({
        userId:userId
    }).populate("userId", "username")
    res.json({
        content
    })

})

router.delete("/content/:id", authMiddleware,async(req,res)=>{
const contentId=req.params.id
const result=await Content.deleteOne({
    _id:contentId,
    //@ts-ignore
    userId:req.userId
})
if(result.deletedCount===0){
    return res.status(404).json({
        msg:"Content not found or you don't have permission to delete it"
    })

}
res.status(200).json({msg:"Content deleted successfully"})

})

router.post('/brain/share',authMiddleware, async(req,res)=>{ //shar yhe brain
const {share}=req.body; //or const share=req.body.share;
if(share){
    const existing= await Link.findOne({
       //@ts-ignore
        userId:req.userId
    })
    if(existing){
        return res.json({
            hash:existing.hash
        })
    }
    const hash=random (10);
    await Link.create({

        //@ts-ignore
        userId:req.userId,
       hash
    })

    res.json({hash})
}else{
    await Link.deleteOne({
        //@ts-ignore
        userId:req.userId})
}
res.json({msg:"Share link updated"   })
})

router.get('/brain/:shareLink', async(req,res)=>{
    const hash=req.params.shareLink;
    const link=await Link.findOne({hash:hash})
    

    if(!link){
        res.status(411).json({msg:"Sorry incorrect input"})
        return; 
    }

    const content=await Content.find({
        userId:link.userId
    })
    const user=await User.findById(link.userId)
    if(!user){
    res.status(411).json({msg:"Sorry user doesnt exist"})
}   

res.json({
        content,
        username:user?.username
    })
    


    
})
 
export default router