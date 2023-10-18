import passport from 'passport'
import {ExtractJwt,Strategy as jwtStrategy}from 'passport-jwt'
import config from '../config/config.js';
import UserDaoMongo from '../persistence/daos/mongo/users.dao.js';
import { logger } from '../utils/logger.js';


const userDao=new UserDaoMongo();
const strategyOption={
    jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey:config.PRIVATE_KEY_JWT
}
const verifyToken=async(jwt_payload,done)=>{
    //console.log("payload jwt",jwt_payload);
    const user=await userDao.getById(jwt_payload.userID)
    if(!user)return done(null,false)
    done(null,user)
}

passport.use('jwt',new jwtStrategy(strategyOption,verifyToken))

passport.serializeUser((user,done)=>{
    done(null,user._id)
})

passport.deserializeUser(async(id,done)=>{
    const user=await userDao.getById(id)
    done(null,user)
})

