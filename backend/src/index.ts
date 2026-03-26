import express from 'express'
import mongoose from 'mongoose';

const app=express();
app.listen(3000,()=>{
    console.log("Server iss running on port 3000")
})

