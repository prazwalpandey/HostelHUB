import passport from "passport";



export const authenticateUser=(req,res,next)=>{
    passport.authenticate("jwt-user", { session: false }, (err, user, info) => {
        if (err) {
            console.error(err);
            return res.status(500).send({ msg: "Internal Server Error" });
        }
        if (!user) {
            return res.status(401).send({ msg: "Unauthorized" });
        }
        req.user = user;
        next();
    })(req, res, next);
}

export const authenticateAdmin=(req,res,next)=>{
        passport.authenticate("jwt-admin", { session: false }, (err, user, info) => {
            if (err) {
                console.error(err);
                return res.status(500).send({ msg: "Internal Server Error" });
            }
            if (!user) {
                return res.status(401).send({ msg: "Unauthorized" });
            }
            req.user = user;
            next();
        })(req, res, next);
    
    };