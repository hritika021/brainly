import express from 'express'
import Authrouter from './auth.js';
import contentRouter from './content.js'
const router=express.Router();
router.use("/auth",Authrouter);
router.use("/content", contentRouter)
export default router;
