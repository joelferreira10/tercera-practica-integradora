import config from '../config/config.js';
import jwt from 'jsonwebtoken';



export const generateToken=(user)=>{
  const payload={
    userID:user._id,
    first_name:user.first_name,
    last_name:user.last_name,
    email:user.email,
    age:user.age,
    role:user.role,
    cart:user.cart
  }

  const token=jwt.sign(payload,config.PRIVATE_KEY_JWT,{expiresIn:"20m"});
  return token;
  
}
