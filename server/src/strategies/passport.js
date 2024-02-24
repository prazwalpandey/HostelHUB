import User from "../database/schemas/user.js";
import Admin from "../database/schemas/admin.js";
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import passport from "passport";


const JWT_SECRET = process.env.JWT_SECRET;

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_SECRET
}

// User JWT Strategy
passport.use("jwt-user",
    new JwtStrategy(options, async function (jwt_payload, done) {
        const user = await User.findById(jwt_payload.id);
        try {
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        } catch (error) {
            return (error,done);
        }
    })
);

export default passport;

//Admin JWT Strategy
passport.use("jwt-admin",
    new JwtStrategy(options, async function (jwt_payload, done) {
        try {
            const admin = await Admin.findById(jwt_payload.id);
            if (admin) {
                return done(null, admin);
            } else {
                return done(null, false);
            }

        } catch (error) {
            return done(error, false);
        }
    })
);