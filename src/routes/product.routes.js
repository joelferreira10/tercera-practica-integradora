import { Router } from "express";
import ProductController from "../controllers/products.controller.js";
import passport from "passport";
//import { authenticateAdmin } from "../middlewares/authenticateAdmin.js";
const productController= new ProductController()
const router =Router()

router
    .get('/',productController.getAll.bind(productController))
    .get('/:id',productController.getById.bind(productController))
    .get('/dto/:id',productController.productDTO.bind(productController))
    .post('/',passport.authenticate('jwt'),productController.create.bind(productController))
    .put('/:id',passport.authenticate('jwt'),productController.update.bind(productController))
    .delete('/:id',passport.authenticate('jwt'),productController.delete.bind(productController))



export default router