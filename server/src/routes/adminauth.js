import { Router } from 'express';
import jwt from 'jsonwebtoken';
import Admin from '../database/schemas/admin.js';
import { hashedPassword, getAdminData, comparePassword } from '../utils/helpers.js';
import { authenticateAdmin} from '../utils/authenticateUsers.js';
import dotenv from 'dotenv';


dotenv.config();

const router = Router();


//Admin Register
router.post('/register', async (req, res) => {
    const { name, email, contact, password, } = req.body;
    const adminDb = await Admin.findOne({ email });
    if (adminDb)
        res.status(400).send({ msg: 'Admin laready exists' });
    else {
        const pwdHash = hashedPassword(password);
        const newAdmin = await Admin.create({ name, email, contact, password: pwdHash });
        newAdmin.save();

        //generate token

        res.sendStatus(201);
    }
});

//Admin login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const admin = await Admin.findOne({ email });
        if (admin && comparePassword(password, admin.password)) {
            const token = jwt.sign(
                { id: admin._id, email, role: admin.role },
                process.env.JWT_SECRET,
                {
                    expiresIn: '2d',
                }
            )
            admin.token = token;
            admin.password = undefined;
            //COOKIE SECTION send token in cookie
            const options = {
                expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
                httpOnly: true,

            }
            res.status(200).cookie("token", token, options).json({
                success: true,
                token,
            });

            console.log('Admin Logged in');
        } else {
            res.status(400).send('Invalid credentials');
        }
    } catch (error) {
        res.status(500).send('Internal Server error');
    }
});


//Check Admin Authentication
//Check Authentication
router.get('/checkauthentication',authenticateAdmin,(req,res)=>{
    res.status(200).send('User is Authenticated');
});

//Access only after loggedin
router.get("/protected", authenticateAdmin, (req, res) => {
    res.status(200).send('Welcome to admin dashboard');
});

//Change Password Route
router.put('/changepassword',authenticateAdmin, async (req, res) => {
    try {
        const { currentPassword, newPassword } = req.body;
        const token=req.cookies.token;
        const decodedToken=jwt.verify(token,process.env.JWT_SECRET,{complete:true});
        const userId=decodedToken.payload.id;
        const admin = await Admin.findById(userId);
        if (admin && comparePassword(currentPassword, admin.password)) {
            admin.password = hashedPassword(newPassword);
            await admin.save();
            res.clearCookie('token');
            res.status(200).send('Password Changed Successfully');
        }
        else{
            res.status(400).send('Invalid credentials');
        }
        
    }catch(error){
        res.status(500).send('Internal Server Error');
    }
})

//LOGOUT ROUTE
router.get('/logout',authenticateAdmin, (req, res) => {
    try {
        res.clearCookie('token').send('Logout successful');
        console.log('Admin Logged out successfully');
    } catch (err) {
        res.status(500).send({ msg: 'Internal Server Error' });
    }
})




export default router;

