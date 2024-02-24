import express from 'express';
import dotenv from 'dotenv';
import passport from 'passport';


dotenv.config();
import './database/connect.js';
import './strategies/passport.js';

// ROUTES
import authRoute from './routes/auth.js';
import adminRoute from './routes/adminauth.js'
const app=express();


// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(passport.initialize());


//  LOGIN AND REGISTRATION ROUTES
app.use('/user/auth',authRoute,(req,res)=>{
    res.sendStatus(200);
});
app.use('/admin/auth',adminRoute,(req,res)=>{
    res.sendStatus(200);
});





























app.listen(process.env.PORT,()=>{
    console.log(`listening port ${process.env.PORT}`);
})
