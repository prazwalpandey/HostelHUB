import { Router } from 'express';
import jwt from 'jsonwebtoken';
import User from '../database/schemas/user.js';
import passport from 'passport';
import { hashedPassword, getAdminData, getUserData, comparePassword } from '../utils/helpers.js';
import { authenticateUser } from '../utils/authenticateUsers.js';

import '../strategies/passport.js';
import dotenv from 'dotenv';


dotenv.config();

const router = Router();


//User Register
router.post('/register', async (req, res) => {
    const { name, email, contact, password,rollNo,batch,department, roomNo, block,floorNo,guardianName,guardianContact,guardianRelationship } = req.body;
    const userDb = await User.findOne({ email });
    if (userDb)
        res.status(400).send({ msg: 'user laready exists' });
    else {
        const pwdHash = hashedPassword(password);
        const currentYear=new Date().getFullYear();
        const yearCalc=(currentYear+56)-batch;
        const newUser = await User.create({ name, email, contact, password: pwdHash,rollNo,batch,department,year:yearCalc ,roomNo, block,floorNo,guardianName,guardianContact,guardianRelationship });
        newUser.save();
        res.sendStatus(201);
    }
});

//User login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(401).send({
            success: false,
            message: "Cound not find the user",
        })
    }
    //password check
    const isValid = comparePassword(password, user.password);
    if (!isValid) {
        return res.status(401).send({
            success: false,
            message: "Invalid credentials",
        })
    }

    const jwtPayload = {
        username: user.email,
        id: user._id,
        role: user.role
    };
    const token = jwt.sign(jwtPayload, process.env.JWT_SECRET);
    res.setHeader('Authorization', `Bearer ${token}`);
    res.status(200).send({
        success: true,
        message: "Logged in successfully",
        role: user.role,
        token: "Bearer " + token,
    });
    console.log('Authenticated Successfully');

});


//Access only after loggedin
router.get("/protected",authenticateUser,(req,res)=>{
    try{
        return res.status(200).send({
            success:true,
            user:{
                id:req.user._id,
                username:req.user.email,
            }
        })
    }catch(err){
        console.log(err);
        return res.status(500).send({msg:'Internal Server Error'});
    }
});



//User Logout
router.get('/logout',(req,res)=>{
    try{

        res.clearCookie('jwtToken');
        console.log('User Logged out successfully');
        res.sendStatus(200);
    } catch(err){
        console.log('Error Logging out:',err);
        res.status(500).send({msg:'Internal Server Error'});
    }
})



export default router;

