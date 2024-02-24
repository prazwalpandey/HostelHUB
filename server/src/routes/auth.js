import { Router } from 'express';
import jwt from 'jsonwebtoken';
import User from '../database/schemas/user.js';
import passport from 'passport';
import { hashedPassword, getAdminData, getUserData, comparePassword } from '../utils/helpers.js';

import '../strategies/passport.js';
import dotenv from 'dotenv';


dotenv.config();

const router = Router();


//User Register
router.post('/register', async (req, res) => {
    const { name, email, contact, password, roomNo, blockNo } = req.body;
    const userDb = await User.findOne({ email });
    if (userDb)
        res.status(400).send({ msg: 'user laready exists' });
    else {
        const pwdHash = hashedPassword(password);
        const newUser = await User.create({ name, email, contact, password: pwdHash, roomNo, blockNo });
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

    return res.status(200).send({
        success: true,
        message: "Logged in successfully",
        role: user.role,
        token: "Bearer " + token,
    });

});


//Access only after loggedin
router.get("/protected",
    passport.authenticate("jwt-user", { session: false }),
    (req, res) => {
        try {
            return res.status(200).send({
                success: true,
                user: {
                    id: req.user._id,
                    username: req.user.email,
                },
            });
        } catch (err) {
            console.log(err);
            return res.status(500).send({ msg: "Internal Server Error" });
        }
    }
);


export default router;

