import jwt from 'jsonwebtoken';


export const authenticateUser = (req, res, next) => {
    const token = req.cookies.token;
    console.log(token)
    if (!token) {
        res.status(403).send('Please Login First');
    }
    try{
        const decodedToken=jwt.verify(token,process.env.JWT_SECRET,{complete:true});
        // console.log(decodedToken);
        if(decodedToken.payload.role==='Student'){
            const decode=jwt.verify(token,process.env.JWT_SECRET);
            console.log(decode);
            req.user=decode;
            next();
        }
        else{
            return res.status(401).send("You aren't student");
        }

    } catch(error){
        res.status(401).status('Invalid token');
    }
};

export const authenticateAdmin = (req, res, next) => {
    const token = req.cookies.token;
    // console.log(token);
    if (!token) {
        res.status(403).send('please login first');
    }
    try {
        const decodedToken=jwt.verify(token,process.env.JWT_SECRET,{complete:true});
        if (decodedToken.payload.role === 'HostelWaden') {
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            console.log(decode);
            req.user = decode;
            next();
        }
        else{
            return res.status(401).send("You aren't admin");
        }

    } catch (error) {
        res.status(401).status('Invalid token');
    }
};
