import { Router } from 'express';
import jwt from 'jsonwebtoken';
import User from '../database/schemas/user.js';
import cookieParser from 'cookie-parser';
import { hashedPassword, getAdminData, getUserData, comparePassword } from '../utils/helpers.js';
import { authenticateUser } from '../utils/authenticateUsers.js';

import dotenv from 'dotenv';


dotenv.config();

const router = Router();


//User Register
router.post('/register', async (req, res) => {
    const { name, email, contact, password, rollNo, batch, department, roomNo, block, floorNo, guardianName, guardianContact, guardianRelationship } = req.body;
    if (!(name && email && contact && password && rollNo && batch && department && roomNo && block && floorNo && guardianName && guardianContact && guardianRelationship)) {
        res.status(400).send('All fields are compulsory');
    }
    const userDb = await User.findOne({ email });
    if (userDb)
        res.status(400).send('User alaready exists');
    else {
        const pwdHash = hashedPassword(password);
        const currentYear = new Date().getFullYear();
        const yearCalc = (currentYear + 56) - batch;
        const newUser = await User.create({ name, email, contact, password:pwdHash, rollNo, batch, department, year: yearCalc, roomNo, block, floorNo, guardianName, guardianContact, guardianRelationship });
        newUser.save();

        //generate token 
        const token = jwt.sign(
            { id: newUser._id, email, role: newUser.role },
            process.env.JWT_SECRET,
            {
                expiresIn: '2d',
            }
        );
        newUser.token = token;
        newUser.password = undefined;
        res.status(201).json(newUser);
    }
});

//User login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (user && comparePassword(password, user.password)) {
            const token = jwt.sign(
                { id: user._id, email, role: user.role },
                process.env.JWT_SECRET,
                {
                    expiresIn: '2d',
                }
            );
            user.token = token;
            user.password = undefined;
            //COOKIE SECTION send token in cookie
            const options = {
                expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
                httpOnly: true,

            }
            res.status(200).cookie("token", token, options).json({
                success: true,
                token,
            });

            console.log('User Logged in');
        } else {
            res.status(400).send('Invalid credentials');
        }
    } catch (error) {
        res.status(500).send('Internal Server error');
    }
});
//Check Authentication
router.get('/checkauthentication',authenticateUser,(req,res)=>{
    res.status(200).send('User is Authenticated');
});


//Access only after loggedin
router.get("/protected",authenticateUser ,(req, res) => {
    res.status(200).send('Welcome to Protected routee');
});

//LOGOUT ROUTE
router.get('/logout',authenticateUser, (req, res) => {
    try {

        res.status(200).clearCookie('token').send('Logout successful');
        console.log('User Logged out successfully');
    } catch (err) {
        res.status(500).send({ msg: 'Internal Server Error' });
    }
})




export default router;

