import express from 'express';
import Content from '../models/contentModel.js';
const router=express.Router();

router.post("/content", async(req,res)=>{
const link=req.body.link;
const type=req.body.type;

})


router.get('/content', async(req,res)=>{

})

router.delete("/content", async(req,res)=>{

})

router.post('/brain/share', async(req,res)=>{

})

router.get('/brain:shareLink', async(req,res)=>{
    
})
 
export default router