import MongoDao from "./class.dao.js";
import { userModel } from "./models/users.model.js";
import {hashPassword,isValidPassword} from '../../../utils/utils.js'
import { logger } from "../../../utils/logger.js";

export default class UserDaoMongo extends MongoDao{
    constructor(){
        super(userModel)
    }
    async register(user){
        try {
            const { email, password } = user;
          
            const userExist = await userModel.findOne({ email:email });
            
            if (userExist)return false
            const hashedPassword = hashPassword(password); 
            const newUser = await userModel.create({ ...user, password: hashedPassword });
            
            return newUser;
            
        } catch (error) {
            throw new Error(error.message);
        }
        
    }
    async login(user){
        try {
            const {email,password}=user;
            const userExist=await userModel.findOne({email:email})
            if (!userExist) return false
            if (!isValidPassword(userExist, password))return false
            return userExist;
        } catch (error) {
            throw new Error(error.message)
        }
    }
}



