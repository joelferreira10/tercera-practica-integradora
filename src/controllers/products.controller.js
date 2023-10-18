import Controllers from "./class.controller.js";
import ProductService from "../services/products.service.js";
import { HttpResponse } from "../utils/http.response.js";
import { diccionaryProduct } from "../utils/diccionaryError.js";

const prodService=new ProductService()
export default class ProductController extends Controllers{
    constructor(){
        super(prodService);
    }
   
    async productDTO(req,res){
        try {
            const { id } = req.params;
            const item = await prodService.productDTO(id);
            if (!item)
            HttpResponse.NOT_FOUND(res, {method: "service",error: diccionaryProduct.PROD_NOT_FOUND});
      else HttpResponse.OK(res,item);
        } catch (error) {
            HttpResponse.INTERNAL_SERVER_ERROR(res,error.message)
        }
    }

    
}