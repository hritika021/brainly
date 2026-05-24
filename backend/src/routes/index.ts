import express from 'express'
import Authrouter from './auth.js';
import contentRouter from './content.js'
import cors from 'cors'
const router=express.Router();
router.use(cors())
router.use("/auth",Authrouter);
router.use("/content", contentRouter)
export default router;
