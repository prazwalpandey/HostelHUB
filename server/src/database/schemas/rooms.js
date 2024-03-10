import mongoose from 'mongoose';

const RoomSchema=new mongoose.Schema({
    name:{
        type:String,
        unique:true
    },
})

const Room=mongoose.model('Roomdata',RoomSchema);

export default Room;

