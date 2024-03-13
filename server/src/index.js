import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
// import Room from './database/schemas/rooms.js';


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
import deleteUserRoute from './routes/deleteUser.js';
import editUserRoute from './routes/editUser.js';
import allocateRoomRoute from './routes/allocateRoom.js';
import resetRoomsRoute from './routes/resetRooms.js';

const app=express();

const allowedOrigins=['https://65f13629753a3894f2209237--enchanting-crostata-75603d.netlify.app']
// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors({
    origin:'allowedOrigins',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders:['Content-Type', 'Authorization'],
    optionsSuccessStatus:200,
    credentials:true,
}));
app.use(cookieParser());
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
app.use('/',getRoomBookedRoute);

//GET ME
app.use('/',getmeRoute);

//Delete USer
app.use('/',deleteUserRoute);

//Update User's Details
app.use('/',editUserRoute);

//Allocate Room
app.use('/',allocateRoomRoute);

//Reset Rooms
app.use('/',resetRoomsRoute);














// const roomNames = [
//     "A101", "A102", "A103", "A104", "A105", "A106", "A107", "A108", "A109", "A110",
//     "A111", "A112", "A113", "A114", "A115", "A116", "A117", "A118", "A119", "A201",
//     "A202", "A203", "A204", "A205", "A206", "A207", "A208", "A209", "A210", "A211",
//     "A212", "A213", "A214", "A215", "A216", "A217", "A218", "A219", "A301", "A302",
//     "A303", "A304", "A305", "A306", "A307", "A308", "A309", "A310", "A311", "A312",
//     "A313", "A314", "A315", "A316", "A317", "A318", "A319", "B101", "B102", "B103",
//     "B104", "B105", "B106", "B107", "B108", "B109", "B110", "B111", "B112", "B113",
//     "B114", "B115", "B116", "B117", "B118", "B119", "B201", "B202", "B203", "B204",
//     "B205", "B206", "B207", "B208", "B209", "B210", "B211", "B212", "B213", "B214",
//     "B215", "B216", "B217", "B218", "B219", "B301", "B302", "B303", "B304", "B305",
//     "B306", "B307", "B308", "B309", "B310", "B311", "B312", "B313", "B314", "B315",
//     "B316", "B317", "B318", "B319", "C101", "C102", "C103", "C104", "C105", "C106",
//     "C107", "C108", "C109", "C110", "C111", "C112", "C113", "C114", "C115", "C116",
//     "C117", "C118", "C119", "C201", "C202", "C203", "C204", "C205", "C206", "C207",
//     "C208", "C209", "C210", "C211", "C212", "C213", "C214", "C215", "C216", "C217",
//     "C218", "C219", "C301", "C302", "C303", "C304", "C305", "C306", "C307", "C308",
//     "C309", "C310", "C311", "C312", "C313", "C314", "C315", "C316", "C317", "C318",
//     "C319"
// ];
// Room.insertMany(roomNames.map(name=>({name})))
//     .then(()=>console.log('Rooms saved successfully'))
//     .catch(err=>console.log('Error saving rooms',err));


app.listen(process.env.PORT,()=>{
    console.log(`listening port ${process.env.PORT}`);
})