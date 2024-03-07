import { Router } from "express";
import User from "../database/schemas/user.js";
import {authenticateAdmin} from "../utils/authenticateUsers.js";

const router= Router();

router.get('/getStudents',authenticateAdmin,async (req, res) => {
    try {
        const students =await User.find().sort({name:1});
        res.status(200).json({students});
    } catch(err){
        console.log(err);
        res.status(500).send({ msg: "Internal Server Error" });
    }
});




export default router;
