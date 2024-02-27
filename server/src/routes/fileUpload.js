import { Router } from 'express';
import multer from 'multer';
import csv from 'csvtojson';
import Product from '../database/schemas/product.js';

import { hashedPassword } from '../utils/helpers.js';


const router = Router();


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        return cb(null, "./uploads");
    },
    filename: (req, file, cb) => {
        return cb(null, file.originalname);
    }
})

const upload = multer({ storage });

router.post('/fileupload', upload.single("csvFile"), async (req, res) => {
    try {
        const jsonArray = await csv().fromFile(req.file.path);
        const jsonArrayWithKey=jsonArray.map(product=>({
            ...product,
            key:hashedPassword(product.category)
        }))
        await Product.insertMany(jsonArrayWithKey);
        res.status(200).send('Successfully Added data');
        console.log(jsonArrayWithKey);

    } catch (err) { 
        console.error(err);
        res.status(500).send('Internal server error');
        console.log(err);
    }
});


export default router;