import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';



dotenv.config();
import './database/connect.js';

// ROUTES
import authRoute from './routes/auth.js';
import adminauthRoute from './routes/adminauth.js';
import logoutRoute from './routes/logout.js';

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
app.use(cookieParser());


//  LOGIN AND REGISTRATION ROUTES
app.use('/user/auth',authRoute);
app.use('/admin/auth',adminauthRoute);

//NOTICES ROUTES
app.use('/admin',noticeRoute);
app.use('/user',noticeRoute)

//COMPLAINS ROUTES
app.use('/user',complainRoute);
app.use('/admin',complainRoute);

//LOGOUT ROUTES
app.use('/',logoutRoute);
app.use('/',logoutRoute);

























app.listen(process.env.PORT,()=>{
    console.log(`listening port ${process.env.PORT}`);
})
