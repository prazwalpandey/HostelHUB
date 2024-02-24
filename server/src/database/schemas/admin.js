import mongoose from 'mongoose';

const AdminSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
<<<<<<< HEAD
    role:{
        type:String,
        required:true,
        default:'HostelAdmin',
    },
=======
    
>>>>>>> 614cba32b09209816e2ac8783021db5975c19ece
    email:{
        type:String,
        required:true,
        unique:true,
    },
    contact:{
        type:Number,
        requred:true,
        min:10,
    },
    password:{
        type:String,
        required:true,
        min:8,
    },
    role:{
        type:String,
        required:true,
        default:'HostelWaden',
    },
});

const Admin=mongoose.model('AdminData',AdminSchema);

export default Admin;