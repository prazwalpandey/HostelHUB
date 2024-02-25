import express from 'express';
import dotenv from 'dotenv';
import passport from 'passport';
import cors from 'cors';


dotenv.config();
import './database/connect.js';
import './strategies/passport.js';

// ROUTES
import authRoute from './routes/auth.js';
import adminRoute from './routes/adminauth.js'

import noticeRoute from './routes/noticesRoutes.js';
import complainRoute from './routes/complainsRoute.js';
const app=express();


// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(cors({
    origin:'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders:'Content-Type, Authorization'
}));
app.use(passport.initialize());


//  LOGIN AND REGISTRATION ROUTES
app.use('/user/auth',authRoute,(req,res)=>{
    res.sendStatus(200);
});
app.use('/admin/auth',adminRoute,(req,res)=>{
    res.sendStatus(200);
});

//NOTICES ROUTES
app.use('/admin/notices',noticeRoute,(req,res)=>{
    res.sendStatus(200);
})

//COMPLAINS ROUTES
app.use('/user/complains',complainRoute,(req,res)=>{
    res.sendStatus(200);
})



























app.listen(process.env.PORT,()=>{
    console.log(`listening port ${process.env.PORT}`);
})
