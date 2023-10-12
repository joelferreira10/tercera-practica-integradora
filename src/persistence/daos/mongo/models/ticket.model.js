import { Schema,model } from "mongoose";

const collectionTicket="tickets";

const ticketSchema=new Schema({
    code:{type:String},
    purchase_datatime:{type:String,required:true,default:new Date()},
    amount:{type:Number,required:true},
    purchaser:{type:String,required:true}
})
ticketSchema.pre('save', function(next) {
    if (!this.code) {
        this.code = generateAlphanumericCode()
    }
    next();
});
export const ticketModel=model(collection,ticketSchema)