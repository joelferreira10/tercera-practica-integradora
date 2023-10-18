
import mongoose from "mongoose";
import config from './config.js';
import { logger } from "../utils/logger.js";
const connection = config.CONNECT_MONGO_LOCAL;

const connectToDatabase = async () => {
    try {
        await mongoose.connect(connection, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        logger.info("Conectado a la base de datos de mongoDB");
    } catch (error) {
        logger.error(`Error al conectar a la base de datos: ${error.message}`);
    }
}

connectToDatabase();
