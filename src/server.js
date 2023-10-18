import express from 'express'
import morgan from 'morgan'
import config from './config/config.js'
import {logger} from './utils/logger.js'
import routesApi from './routes/index.js'
import session from 'express-session'
import './passport-jwt/passport-jwt.js'
import './config/connection.mongo.js'
import {getSessionOption} from './utils/utils.js'
const PORT=config.PORT

const app=express()
app
    .use(morgan('dev'))
    .use(express.urlencoded({extended:true}))
    .use(express.json())
    .use(session(getSessionOption))
    .use('/api',routesApi)
    .listen(PORT,()=>{logger.info(`server ok, port ${PORT}`)})


