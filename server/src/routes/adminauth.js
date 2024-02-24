import { Router } from 'express';
import jwt from 'jsonwebtoken';
import Admin from '../database/schemas/admin.js';
import passport from 'passport';
import { hashedPassword,getAdminData, comparePassword} from '../utils/helpers.js';
import { authenticateAdmin } from '../utils/authenticateUsers.js';

import '../strategies/passport.js';
import dotenv from 'dotenv';


dotenv.config();

const router = Router();


//Admin Register
router.post('/register', async (req, res) => {
    const { name, email, contact, password,} = req.body;
    const adminDb = await Admin.findOne({ email });
    if (adminDb)
        res.status(400).send({ msg: 'Admin laready exists' });
    else {
        const pwdHash = hashedPassword(password);
        const newAdmin = await Admin.create({ name, email, contact, password: pwdHash});
        newAdmin.save();
        res.sendStatus(201);
    }
});

//Admin login
router.post('/login',async (req, res) => {
    const {email,password}=req.body;
    const admin=await Admin.findOne({email});
    if(!admin){
        return res.status(401).send({
            success:false,
            message:"Cound not find the Admin",
        })
    }
    //password check
    const isValid=comparePassword(password,admin.password);
    if(!isValid){
        return res.status(401).send({
            success:false,
            message:"Invalid credentials",
        })
    }

    const jwtPayload={
        adminusername:admin.email,
        id:admin._id,
        role:admin.role,
    };
    const token=jwt.sign(jwtPayload,process.env.JWT_SECRET);

    return res.status(200).send({
        success:true,
        message:"Logged in successfully",
        role:admin.role,
        token:"Bearer "+token,
    });

});


//Access only after loggedin
router.get("/protected",authenticateAdmin,(req,res)=>{
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


export default router;

