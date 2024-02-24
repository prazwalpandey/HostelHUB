import { Router } from "express";
import { authenticateAdmin } from "../utils/authenticateUsers.js";
import Notices from "../database/schemas/notices.js";



const router = Router();

router.post('/',authenticateAdmin, async (req, res) => {

    try {
        const { noticeOn, description } = req.body;
        const noticeBy = req.user.name;
        const newNotice = await Notices.create({ noticeOn, description, noticeBy });
        newNotice.save();
        res.sendStatus(201);
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Internal Server Error" });
    }
});

//ROUTES TO GET NOTICES



export default router;