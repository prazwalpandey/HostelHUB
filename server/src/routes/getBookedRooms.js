import User from '../database/schemas/user.js';

import Router from 'express';
import { authenticateAdmin } from '../utils/authenticateUsers.js';

const router = Router();

router.get('/bookedrooms', authenticateAdmin, async (req, res) => {
    try {
        const users = await User.find({}, 'name block roomNo').exec();

        const bookedRooms = users.map(user => {
            const block = user.block || ''; // Handle potential null values
            const roomNo = user.roomNo || ''; // Handle potential null values
            const combinedString = block + roomNo;
            return combinedString.trim(); // Trim any leading or trailing whitespace
        }).filter(combinedString => combinedString !== ''); // Filter out empty strings

        res.status(200).json({ bookedRooms });

    } catch (err) {
        res.status(500).send('Internal Server Error'); // Corrected status code to 500
    }
})





router.get('/availableroomscount', authenticateAdmin, async (req, res) => {
    try {
        const bookedRooms = await User.distinct("roomNo", { roomNo: { $ne: "" } });
        const noOfBookedRooms = bookedRooms.length;
        const noOfAvailableRooms = 171 - noOfBookedRooms;
        // console.log(noOfAvailableRooms);
        res.status(200).json({ count: noOfAvailableRooms });
    } catch (error) {
        res.status(500).send({ msg: "Internal Server Error" });
    }
});


export default router;