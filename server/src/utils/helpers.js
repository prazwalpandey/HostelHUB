import bcrypt from 'bcryptjs';

const hashedPassword=((password)=>{
    const salt=bcrypt.genSaltSync(15);
    return bcrypt.hashSync(password,salt);
});

const comparePassword=((raw,hash)=>{
    return bcrypt.compareSync(raw,hash);
});

module.exports={
    hashedPassword,
    comparePassword,
}