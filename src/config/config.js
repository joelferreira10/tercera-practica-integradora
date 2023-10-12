import dotenv from 'dotenv'
dotenv.config()

export default{
    CONNECT_MONGO_LOCAL:process.env.CONNECT_MONGO_LOCAL,
    CONNECT_MONGO_ATLAS:process.env.CONNECT_MONGO_ATLAS,
    PERSISTENCE:process.env.PERSISTENCE,
    PRIVATE_KEY_JWT:process.env.PRIVATE_KEY_JWT,
    USER:process.env.USER,
    PASS:process.env.PASS,
    PORT:process.env.PORT
}