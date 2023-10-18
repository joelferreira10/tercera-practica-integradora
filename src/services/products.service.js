import factory from "../persistence/daos/factory.js";
import ProductDTO from "../persistence/repository/product.repository.js";
import Service from "./class.service.js";
const productDTO=new ProductDTO()
const {productDao}=factory

export default class ProductService extends Service{
    constructor(){
        super(productDao)
    }
    async productDTO(id){
        try {
            const response=await productDTO.productDTO(id)
            if(!response)return false
            return response;
        } catch (error) {
            throw new Error(error.message)
        }
    }
}