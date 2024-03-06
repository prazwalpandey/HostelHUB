import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import path from 'path';



dotenv.config();
import './database/connect.js';

// ROUTES
import authRoute from './routes/auth.js';
import adminauthRoute from './routes/adminauth.js';

import noticeRoute from './routes/noticesRoutes.js';
import complainRoute from './routes/complainsRoute.js';
import fileuploadRoute from './routes/fileUpload.js';
import getStudentsRoute from './routes/getStudents.js';
import getRoomBookedRoute from './routes/getBookedRooms.js';
import getmeRoute from './routes/getme.js';
const app=express();

const allowedOrigins=['http://localhost:5173']
// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors({
    origin:allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders:['Content-Type', 'Authorization'],
    optionsSuccessStatus:200,
    credentials:true,
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
app.options('*', cors())

//  LOGIN AND REGISTRATION AND LOGOUT ROUTES
app.use('/user/auth',authRoute);
app.use('/admin/auth',adminauthRoute);

//NOTICES ROUTES
app.use('/admin',noticeRoute);
app.use('/user',noticeRoute);

//COMPLAINS ROUTES
app.use('/user',complainRoute);
app.use('/admin',complainRoute);


//FILEUPLOADS ROUTES
app.use('/',fileuploadRoute);

//Get Students ROUTES
app.use('/',getStudentsRoute);
//Get Rooms Booked
app.use('/bookedrooms',getRoomBookedRoute);

//GET ME
app.use('/',getmeRoute);
















app.listen(process.env.PORT,()=>{
    console.log(`listening port ${process.env.PORT}`);
})