import bcrypt from 'bcryptjs';
import User from '../database/schemas/user.js';
import Admin from '../database/schemas/admin.js';



export const hashedPassword=((password)=>{
    const salt=bcrypt.genSaltSync(15);
    return bcrypt.hashSync(password,salt);
});

export const comparePassword=((raw,hash)=>{
    return bcrypt.compareSync(raw,hash);
});

export const getUserData=((email)=>{
    const user=User.findOne({email});
    return user;
})

export const getAdminData=((email)=>{
    const admin=Admin.findOne({email});
})
