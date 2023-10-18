
import { logger } from "../utils/logger.js";
import Service from './class.service.js'
import { generateToken } from "../passport-jwt/generateToken.js";
import factory from "../persistence/daos/factory.js";
const {userDao}=factory
export default class UserService extends Service{
    constructor(){
        super(userDao)
    }
    async register(user){
        try {
            const response=await userDao.register(user)
            logger.info(`desde service ${response} register`)
            return response
        } catch (error) {
            throw new Error(error);
        }
    }
    async login(user){
        try {
            const userExist=await userDao.login(user)
            if(userExist)return generateToken(userExist)
            else return false
        } catch (error) {
            console.log(error);
        }
    }
    async addProducToUser(userId,prodId,quantity){
        try {
           
            const prod=await productDao.getById(prodId)
            if (!prod)return false
            else{
               const response= await userDao.addproductToUser(userId,prodId,quantity)
               return response
            } 
        } catch (error) {
            throw new Error(error)
        }

    }
}