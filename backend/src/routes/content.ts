import express from 'express';
import Content from '../models/contentModel.js';
import { authMiddleware } from '../authMiddleware.js';

const router=express.Router();

router.post("/content",authMiddleware, async(req,res)=>{
    console.log("Hit the content route")
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
return res.json({
    msg:"Content added"
})
})


router.get('/', async(req,res)=>{

})

router.delete("/", async(req,res)=>{

})

router.post('/brain/share', async(req,res)=>{

})

router.get('/brain:shareLink', async(req,res)=>{
    
})
 
export default router