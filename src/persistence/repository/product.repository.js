import ProductResDTO from "../dtos/product.res.dto.js";
import factory from "../daos/factory.js";

const {produtDao}=factory

export default class ProductDTO{
    constructor(){
        this.produtDao=produtDao
    }
    async productDTO(id) {
       try {
        const response=await this.produtDao.getById(id)
        if(!response)false
        return new ProductResDTO(response)
       } catch (error) {
        throw new Error(error.message)
       } 
}
}