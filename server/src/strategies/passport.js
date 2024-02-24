import User from "../database/schemas/user.js";
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import passport from "passport";


const JWT_SECRET = process.env.JWT_SECRET;

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_SECRET
}

// Combined JWT Strategy
passport.use("jwt",
    new JwtStrategy(options, async function (jwt_payload, done) {
        const user = await User.findById(jwt_payload.id);
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    })
);

export default passport;