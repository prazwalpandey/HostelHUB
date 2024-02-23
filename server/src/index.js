import express from 'express';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';



dotenv.config();
import './database/connect.js';

const app=express();


// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use ((req,res,next)=>{
    const token=req.headers.authorization;
    if(!token){
        jwt.verify(token,process.env.JWT_SECRET,(err,decoded)=>{
            if(err){
                res.sendStatus(403);
            } else{
                req.user=decoded;
            }
            next();
        });
    } else{
        next();
    }
})

//FOR LOGIN MIDDLEWARES
app.use(passport.initialize());





























app.listen(process.env.PORT,()=>{
    console.log(`listening port ${process.env.PORT}`);
})
