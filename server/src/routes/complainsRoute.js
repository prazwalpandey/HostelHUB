import { Router } from "express";
import { authenticateAdmin, authenticateUser } from "../utils/authenticateUsers.js";
import Complains from "../database/schemas/complains.js";



const router = Router();

router.post('/createcomplain', authenticateUser, async (req, res) => {

    try {
        const { complainOn, description } = req.body;
        const complainBy = req.user.name;

        const newComplain = await Complains.create({ complainOn, description, complainBy });
        newComplain.save();
        console.log(newComplain);
        res.sendStatus(201);
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Internal Server Error" });
    }

});

router.get('/getallcomplain',authenticateAdmin, async (req, res) => {
    try {
        const complains = await Complains.find().sort({ createdAt: -1 });
        res.status(200).send({complains});
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Internal Server Error" });
    }
});

router.get('/getcomplain',authenticateUser,async (req, res)=>{
    try{
        const user=req.user.name;
        const complains=await Complains.find({complainBy:user});
        res.status(200).send({complains});

    }catch(error){
        res.status(500).send({ msg: "Internal Server Error" });
        console.log(error);
    }
})

export default router;