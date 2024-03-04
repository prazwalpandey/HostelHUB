import User from '../database/schemas/user.js';

import Router from 'express';

const router=Router();

router.get('/',async (req, res) => {
    try {
        const users=await User.find({},'name block roomNo').exec();
        
        const bookedRooms=users.map(user=>{
            const block=user.block;
            const roomNo=user.roomNo;
            const combinedString=block+roomNo;
            return combinedString;
        });
        res.status(200).json({bookedRooms});

    }catch(err){
        res.status(505).send('Internal Server Error');
    }
})


export default router;