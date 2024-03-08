import { Router } from "express";
import { authenticateAdmin,authenticateUser } from "../utils/authenticateUsers.js";
import Notices from "../database/schemas/notices.js";
import jwt from 'jsonwebtoken';


const router = Router();

router.post('/createnotice',authenticateAdmin, async (req, res) => {

    try {
        const { noticeOn, description } = req.body;
        const token = req.cookies.token;
        const decodecdToken = jwt.verify(token, process.env.JWT_SECRET, { complete: true });
        const userId = decodecdToken.payload.id;
        const noticeBy=userId;
        const newNotice = await Notices.create({ noticeOn, description, noticeBy });
        newNotice.save();
        res.status(201).send('Notice posted successfully');
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Internal Server Error" });
    }
});
router.get('/getnotice',authenticateAdmin, async (req, res) => {
    try {
        const notices=await Notices.find().sort({createdAt:-1});
        // console.log(notices);
        res.status(200).json({notices});
    } catch(error){
        console.log(error);
        res.status(500).send({ msg: "Internal Server Error" });
    }
})

router.get('/getallnotice',authenticateUser,async(req,res)=>{
    try {
        const notices = await Notices.find().sort({ createdAt: -1 });
        console.log(notices);
        res.status(200).send({notices});
        
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Internal Server Error" });
    }
})

//ROUTES TO GET NOTICES



export default router;