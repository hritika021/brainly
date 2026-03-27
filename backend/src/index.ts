import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

dotenv.config();
import express from 'express'

import mainRouter from './routes/index.js'
import connect from './db.js';
const app=express();
app.use(cookieParser());
app.use(express.json())
app.use("/api/v1", mainRouter);

connect();
app.listen(3000,()=>{
    console.log("Server connected! ")
})