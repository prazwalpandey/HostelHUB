import {Router} from 'express';
import User from '../database/schemas/user.js';

const router=Router();


router.put('/resetrooms', async (req, res) => {
    try {
        const user=await User.find({})
        user.forEach(async (doc)=>{
            await doc.updateOne({roomNo:''})
        })
        res.status(200).send('Rooms Reset Successfully');
        
    }catch(error){
        console.log(error)
        res.status(500).send('Internal server error');
    }
})

export default router;