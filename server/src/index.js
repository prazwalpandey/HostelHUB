import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app=express();


























app.listen(process.env.PORT,()=>{
    console.log(`listening port ${process.env.PORT}`);
})
