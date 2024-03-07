import { Router } from "express";
import { authenticateAdmin, authenticateUser } from "../utils/authenticateUsers.js";
import Complains from "../database/schemas/complains.js";
import  jwt from "jsonwebtoken";


const router = Router();

router.post('/createcomplain', authenticateUser, async (req, res) => {

    try {
        const token=req.cookies.token;
        const decodecdToken=jwt.verify(token,process.env.JWT_SECRET,{complete:true});
        const userId=decodecdToken.payload.id;
        console.log(userId);
        const { complainOn, description } = req.body;
        const complainBy = userId;
        console.log(complainBy);
        
        const newComplain = await Complains.create({ complainOn, description, complainBy:complainBy });
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
        res.status(200).json({complains});
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Internal Server Error" });
    }
});

router.get('/getcomplain',authenticateUser,async (req, res)=>{
    try{
        const token=req.cookies.token;
        const decodecdToken=jwt.verify(token,process.env.JWT_SECRET,{complete:true});
        const userId=decodecdToken.payload.id;
        console.log(userId);
        const complains=await Complains.find({complainBy:userId});
        res.status(200).json({complains});

    }catch(error){
        res.status(500).send({ msg: "Internal Server Error" });
        console.log(error);
    }
})

router.put('/resolvecomplaint/:id', async (req, res) => {
    const complaintId = req.params.id;
    try {
      const complaint = await Complains.findOneAndUpdate(
        { _id: complaintId },
        { status: 'resolved' },
        { new: true }
      );
      if (!complaint) {
        return res.status(404).json({ error: 'Complaint not found' });
      }
      console.log(complaint.status);
      res.sendStatus(200);
    } catch (error) {
      console.error('Error resolving complaint:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


export default router;