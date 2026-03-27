import dotenv from 'dotenv';

dotenv.config();
import express from 'express'

import mainRouter from './routes/index.js'
import connect from './db.js';
const app=express();

app.use(express.json())
app.use("/api/v1", mainRouter);

connect();
console.log("New server")
app.listen(3000,()=>{
    console.log("Server connected! ")
})