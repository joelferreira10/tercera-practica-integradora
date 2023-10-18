import MongoDao from "./class.dao.js";
import {productModel} from './models/products.model.js'

export default class ProductDaoMongo extends MongoDao{
    constructor(){
        super(productModel);
    }
}