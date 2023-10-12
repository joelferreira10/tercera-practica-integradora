import MongoDao from "./class.dao.js";
import { userModel } from "./models/users.model.js";
import {hashPassword,isValidPassword} from '../../../utils/utils.js'
import '../../../config/connection.mongo.js'

export default class UserDaoMongo extends MongoDao{
    constructor(){
        super(userModel)
    }
    async register(user){
        try {
            const { email, password } = user;
            const userExist = await userModel.findOne({ email:email });
    
            if (userExist) {
                throw new Error("User already exists");
            }
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
            if (!userExist) {
                throw new Error("User not found");
            }
            if (!isValidPassword(userExist, password)) {
                throw new Error("Invalid password");
            }
            return userExist;
        } catch (error) {
            throw new Error(error.message)
        }
    }
}



