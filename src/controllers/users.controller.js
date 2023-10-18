import UserService from "../services/users.service.js";
import Controllers from "./class.controller.js";
import { HttpResponse } from "../utils/http.response.js";
import { diccionaryUser } from "../utils/diccionaryError.js";
import { logger } from "../utils/logger.js";

const httpResponse=new HttpResponse()
const userService=new UserService()
export default class UserController extends Controllers{
    constructor() {
       super(userService)
    }
    async register(req,res){
        try {
            const newUser=await userService.register(req.body)
            if(!newUser){
                httpResponse.NOT_FOUND(res,{method:"services", error:diccionaryUser.USER_EXIST})
            }
            else {
                httpResponse.OK(res,newUser)
            }
        } catch (error) {
            httpResponse.INTERNAL_SERVER_ERROR(res,{error:error.message})
        }
    }
    async login(req,res){
        try {
           const token=await userService.login(req.body)
           if(!token)httpResponse.NOT_FOUND(res,"Token not found")
           res.header('Authorization',token)
           httpResponse.OK(res,token)
        } catch (error) {
            logger.error("error en el token")
            httpResponse.INTERNAL_SERVER_ERROR(res,{error:error.message})
        }
    }
    async current(req,res){
        try {
            const{id}=req.user
            const user=await userService.getById(id)
            if(user)return httpResponse.OK(res,user)
            return httpResponse(res, diccionaryUser.USER_NOT_FOUND)
        } catch (error) {
            httpResponse.INTERNAL_SERVER_ERROR(res,error.message)
        }
    }
}