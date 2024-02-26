import { Router } from 'express';
import { authenticateAdmin, authenticateUser } from '../utils/authenticateUsers.js';


const router = Router();

//Admin Logout
router.get('/logoutadmin',authenticateAdmin, (req, res) => {
    try {
        res.clearCookie('token').send('Logout successful');
        console.log('Admin Logged out successfully');
    } catch (err) {
        res.status(500).send({ msg: 'Internal Server Error' });
    }
})

router.get('/logoutuser',authenticateUser, (req, res) => {
    try {

        res.clearCookie('token').send('Logout successful');
        console.log('User Logged out successfully');
    } catch (err) {
        res.status(500).send({ msg: 'Internal Server Error' });
    }
})

export default router;