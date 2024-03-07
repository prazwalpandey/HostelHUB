import mongoose from "mongoose";

const ComplainsSchema=new mongoose.Schema({
    complainOn:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    complainBy:{
        type:String,
        required:true
    },
    message:{
        type:String,

    },
    status:{
        type:String,
        default:'Pending',
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }

})

const Complains=mongoose.model('ComplainData',ComplainsSchema);

export default Complains;