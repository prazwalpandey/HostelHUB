import mongoose from 'mongoose';

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    contact:{
        type:Number,
        required:true,
        unique:true,
        min:10,
    },
    password:{
        type:String,
        // required:true,
        minlength:8,
    },
    roomNo:{
        type:Number,
        required:true,
    },
    blockNo:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        default:'Student'
    },
    createdAt:{
        type:Date,
        required:true,
        default:new Date(),
    }
});

const User=mongoose.model('UserData',UserSchema);
export default User;