import Router from 'express';
import User from '../database/schemas/user.js';
import { authenticateAdmin } from '../utils/authenticateUsers.js';

const router = Router();   

router.delete('/deleteuser/:id', authenticateAdmin, async (req, res) => {
    try {
        const id = req.params.id; // Get user ID from URL parameters
        const user = await User.findByIdAndDelete(id); // Delete user by ID
        if (!user) {
            return res.status(404).send({ msg: "User not found" });
        }
        res.status(200).send('User Deleted Successfully');
    } catch (err) {
        console.error("Error deleting user:", err);
        res.status(500).send({ msg: "Internal Server Error" });
    }
});


export default router;