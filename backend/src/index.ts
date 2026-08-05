import dotenv from 'dotenv';

dotenv.config();
import express from 'express'

import mainRouter from './routes/index.js'
import connect from './db.js';
const app=express();
const port =process.env.PORT || 3000;
app.use(express.json())
app.use("/api/v1", mainRouter);

connect();

app.listen(port)