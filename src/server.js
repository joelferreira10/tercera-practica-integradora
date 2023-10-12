import express from 'express'
import morgan from 'morgan'
import config from './config/config.js'
import {logger} from './utils/logger.js'
import './config/connection.mongo.js'

const PORT=config.PORT
const app=express()

app.listen(PORT,()=>{logger.info(`server ok, port ${PORT}`)})