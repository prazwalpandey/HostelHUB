import Notice from "../database/schemas/notices.js";
import Complain from "../database/schemas/complains.js";


export const getNotices = async (req, res) => {
    try{
        const notices= await Notice.find().sort({createdAt:-1});
        res.send({notices});
    } catch(err){
        console.log(err);
        res.status(500).send({err:'Internal Server Error'});
    }
}

export const getComplains = async (req, res) => {
    try{
        const complains= await Complain.find().sort({createdAt:-1});
        res.send({complains});
    } catch(err){
        console.log(err);
        res.status(500).send({err:'Internal Server Error'});
    }
}
