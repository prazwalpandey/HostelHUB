import { Router } from "express";
import { authenticateAdmin, authenticateUser } from "../utils/authenticateUsers.js";
import Complains from "../database/schemas/complains.js";
import jwt from "jsonwebtoken";


const router = Router();

router.post('/createcomplain', authenticateUser, async (req, res) => {

  try {
    const token = req.cookies.token;
    const decodecdToken = jwt.verify(token, process.env.JWT_SECRET, { complete: true });
    const userId = decodecdToken.payload.id;
    console.log(userId);
    const { complainOn, description } = req.body;
    const complainBy = userId;
    console.log(complainBy);

    const newComplain = await Complains.create({ complainOn, description, complainBy: complainBy });
    newComplain.save();
    console.log(newComplain);
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Internal Server Error" });
  }

});

router.get('/getallcomplain', authenticateAdmin, async (req, res) => {
  try {
    const pendingComplaints = await Complains.find({ status: 'Pending' }).sort({ createdAt: -1 });
    const resolvedComplaints = await Complains.find({ status: 'Resolved' }).sort({ createdAt: -1 });
    
    // Concatenate pending and resolved complaints
    const allComplaints = [...pendingComplaints, ...resolvedComplaints];
    
    res.status(200).json({ complains: allComplaints });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Internal Server Error" });
  }
});


router.get('/complainscount', authenticateAdmin, async (req, res) => {
  try {
    const complainsCount = await Complains.countDocuments();
    res.status(200).json({ count:complainsCount });
  } catch (error) {
    res.status(500).send({ msg: "Internal Server Error" });
  }
})


router.get('/getcomplain', authenticateUser, async (req, res) => {
  try {
    const token = req.cookies.token;
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET, { complete: true });
    const userId = decodedToken.payload.id;
    console.log(userId);
    const complains = await Complains.find({ complainBy: userId });
    //Filter complaints
    const pendingComplaints = complains.filter(complaint => complaint.status === 'Pending').sort((a, b) => b.createdAt - a.createdAt);
    const resolvedComplaints = complains.filter(complaint => complaint.status === 'Resolved').sort((a, b) => b.createdAt - a.createdAt);
    
    const allComplaints = [...pendingComplaints, ...resolvedComplaints];
    res.status(200).json({ allComplaints });

  } catch (error) {
    res.status(500).send({ msg: "Internal Server Error" });
    console.log(error);
  }
})

router.put('/resolvecomplaint/:id', async (req, res) => {
  const complaintId = req.params.id;
  try {
    const complaint = await Complains.findOneAndUpdate(
      { _id: complaintId },
      { status: 'Resolved' },
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