import { Schema,model,Types} from "mongoose";

const collectionUser="users";

const userSchema=new Schema({
    first_name:{type:String,required:true},
    last_name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    age:{type:Number,required:true,default:0},
    password:{type:String, required:true},
    role:{type:String,required:true,default:"user"},
    cart: {
        id:{
            type:Schema.Types.ObjectId,
            default: new Types.ObjectId()
        },
        products:[{
            productId :{type:Schema.Types.ObjectId,ref:"products"},
            quantity:{type:Number,default:1},
            _id:false
        }]
    },
    isGithub:{type:Boolean,default:false},
    isGoogle:{type:Boolean,default:false}
})

export const userModel=model(collectionUser,userSchema)