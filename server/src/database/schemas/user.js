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
        required:true,
        minlength:8,
    },
    block:{
        type:CharacterData,
    },
    roomNo:{
        type:Number,
        required:true,
    },
    role:{
        type:String,
        required:true,
        default:'Student'
    },
    guardianName:{
        type:String,
        required: true,
    },
    guardianContact:{
        type:Number,
        required:true,
        min:10,
    },
    guardianRelationship:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        required:true,
        default:new Date(),
    }
});

module.exports=mongoose.model('UserData',UserSchema);