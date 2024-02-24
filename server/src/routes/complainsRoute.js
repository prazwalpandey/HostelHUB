import { Router } from "express";
import { authenticateUser } from "../utils/authenticateUsers.js";
import Complains from "../database/schemas/complains.js";



const router = Router();

router.post('/', authenticateUser, async (req, res) => {

    try {
        const { complainOn, description } = req.body;
        const complainBy = req.user.name;

        const newComplain = await Complains.create({ complainOn, description, complainBy });
        newComplain.save();

        res.sendStatus(201);
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Internal Server Error" });
    }

});

export default router;