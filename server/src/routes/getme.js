import Router from 'express';
import User from '../database/schemas/user.js';
import jwt, { decode } from 'jsonwebtoken';



const router = Router();



router.get('/getme', async (req, res) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).send({ msg: "Unauthorized" });
        }

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET, { complete: true });
        const userEmail = decodedToken.payload.email;

        const me = await User.findOne({ email: userEmail });

        if (!me) {
            return res.status(404).send({ msg: "User not found" });
        }
        // console.log(me.name);
        res.status(200).json({
            name: me.name,
            email: me.email,
            contact: me.contact,
            department: me.department,
            rollNo: me.rollNo,
            block: me.block,
            roomNo: me.roomNo,
            guardianName: me.guardianName,
            guardianContact: me.guardianContact,
            guardianRelationship: me.guardianRelationship
        });
    } catch (err) {
        console.log(err);
        res.status(500).send({ msg: "Internal Server Error" });
    }
});


export default router;