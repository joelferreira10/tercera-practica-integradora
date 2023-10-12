import bcrypt from 'bcrypt'

export const hashPassword=password=>bcrypt.hashSync(password,bcrypt.genSaltSync(10))
export const isValidPassword=(user,password)=>bcrypt.compareSync(password,user.password)



/* ------------------------- generador alfanumerico ------------------------- */
export const generateAlphanumericCode=(length = 10)=> {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}
