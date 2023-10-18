import config from "../../config/config.js";
import UserDaoMongo from "./mongo/users.dao.js";
import ProductDaoMongo from './mongo/products.dao.js'
//import TicketDaoMongo from './mongo/ticket.dao.js'
import { logger } from "../../utils/logger.js";

let userDao;
let productDao;
let ticketDao;
let persistence=config.PERSISTENCE

switch (persistence) {
    case "file":
        console.log("entro a persistencia FileSystem")
        userDao="";
        productDao=new ProductFS()
        break;
    case "mongo":
        logger.info("entro a persistencia Mongo")
        userDao=new UserDaoMongo();
        productDao=new ProductDaoMongo()
       // ticketDao=new TicketDaoMongo()
        break;
    default:
        userDao=new UserDaoMongo();
        productDao=new ProductDaoMongo()
        //ticketDao=new TicketDaoMongo()
       
}
export default{
    userDao,
    productDao,
    ticketDao
}