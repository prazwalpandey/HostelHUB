import mongoose from "mongoose";

const NoticesSchema=new mongoose.Schema({
    noticeOn:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    noticeBy:{
        type:String,
        default:'HoltelAdmin',
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }

})

const Notices=mongoose.model('NoticeData',NoticesSchema);
export default Notices;