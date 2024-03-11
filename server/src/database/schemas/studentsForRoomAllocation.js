import mongoose from 'mongoose';

const RegisterStudentsSchema=new mongoose.Schema({
    rollNos: {
        type: [String],
        required: true,
    },
    groupId:{
        type:String,
        unique:true,
    },
    roomNo:{
        type:String,
        default:''
    }
});

const RegisterStudent=mongoose.model('RegisterStudentdata',RegisterStudentsSchema);
export default RegisterStudent; 