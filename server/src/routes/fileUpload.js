import {Router} from 'express';
import {autheticateAdmin} from './utils/authenticateUsers.js';

const router=Router();



router.get('/fileupload',autheticateAdmin,(req,res)=>{
    
})