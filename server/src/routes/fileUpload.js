import { Router } from 'express';
import multer from 'multer';
import csv from 'fast-csv';
import xlsx from 'xlsx';
import Product from '../database/schemas/product.js';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';


const router = Router();

const storage = multer.memoryStorage(); // Use memory storage for multer
const upload = multer({ storage });

// Get the directory name of the current module file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.post('/fileupload', upload.single('file'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send({ msg: 'No file uploaded' });
        }

        // Get the file path
        const filePath = path.join(__dirname, '..', 'uploads', req.file.originalname);

        // Read Contents of the file
        if (req.file.originalname.endsWith(".csv")) {
            processCsv(filePath);
        } else if (req.file.originalname.endsWith(".xlsx") || req.file.originalname.endsWith(".xls")) {
            processExcel(filePath);
        } else {
            return res.status(400).send('Unsupported file format.');
        }

        res.status(201).send('File uploaded successfully.');

    } catch (error) {
        console.log(error);
        res.status(500).send("Error uploading file.");
    }
});

const processCsv = (filePath) => {
    csv.parseFile(filePath, { headers: true })
        .on("data", async (data) => {
            try {
                await Product.create(data);
            } catch (error) {
                console.error("Error saving product:", error);
            }
        })
        .on("end", () => {
            console.log("CSV file processed successfully.");
        });
}

const processExcel = (filePath) => {
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(sheet);

    data.forEach(async (row) => {
        try {
            await Product.create(row);
        } catch (error) {
            console.error("Error saving product:", error);
        }
    });

    console.log("Excel file processed successfully.");
}

export default router;