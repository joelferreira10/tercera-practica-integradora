import { Schema,model } from "mongoose";

const collectionProduct="products";

const productSchema=new Schema({
    title: { type: String, required: true,index:true},
    description: { type: String },
    code:{type:String, required:true,index:true},
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    category:{type:String, required:true,index:true},
    thumbnails:[{type:String,default:[] }]
})

export const productModel=model(collectionProduct,productSchema);