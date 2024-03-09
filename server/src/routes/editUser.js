import Router from 'express';
import User from '../database/schemas/user.js';
import {authenticateAdmin} from '../utils/authenticateUsers.js';
const router=Router();

router.put('/update/:id',authenticateAdmin, async (req, res) => {
    try {
        const userId=req.params.id;
        const { name, email, contact, rollNo, block, roomNo,guardianName, guardianContact, guardianRelationship } = req.body;
        const updatedUser = await User.findByIdAndUpdate(userId, { name, email, contact, rollNo, block, roomNo,guardianName, guardianContact, guardianRelationship },{new:true});
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        // console.log(updatedUser);
        res.status(200).json({updatedUser});
    }catch(err)
    {
        res.status(500).send('Internal Server Error');
    }
})

export default router;