import { HttpResponse } from "../utils/http.response.js";
import {diccionaryProduct}from '../utils/diccionaryError.js'
const httpResponse=new HttpResponse()
export default class Controllers{
    constructor(service){
        this.service=service
    }
    async getAll (req,res){
       try {
        const item=await this.service.getAll()
        httpResponse.OK(res,item)
       } catch (error) {
        console.log(error);
       } 
    }
    async getById (req,res){
        try {
         const {id}=req.params
         const item=await this.service.getById(id)
         if(!item)httpResponse.NOT_FOUND(res,{method:"service",error:diccionaryProduct.PROD_NOT_FOUND})
        else httpResponse.OK(res,item)
        } catch (error) {
         console.log(error);
        } 
     }

     async create (req,res){
        try {
         const newItem=await this.service.create(req.body);
         if(!newItem)httpResponse.NOT_FOUND(res,{method:"service",error:diccionaryProduct.PROD_NOT_FOUND})
         else httpResponse.OK(res,newItem)
        } catch (error) {
         console.log(error);
        } 
     }
     async update (req,res){
        try {
            const {id}=req.params
            const item=await this.service.getById(id)
        if(!item)httpResponse.NOT_FOUND(res,{method:"service",error:diccionaryProduct.PROD_NOT_FOUND})
        else{
            const itemUp=await this.service.update(id,req.body)
            httpResponse.OK(res,itemUp)
        }
        } catch (error) {
            httpResponse.INTERNAL_SERVER_ERROR(res,error.message);
        } 
     }
     async delete(req,res){
        try {
            const {id}=req.params
            const item=await this.service.getById(id)
            if(!item)httpResponse.NOT_FOUND(res,{method:"service",error:diccionaryProduct.PROD_NOT_FOUND})
            else{ 
            await this.service.delete(id)
            
            httpResponse.OK(res,{delete:"ok",item}) 
            }
        } catch (error) {
            httpResponse.INTERNAL_SERVER_ERROR(res,error.message);
        } 
     }
}