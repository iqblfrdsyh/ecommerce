import { getProduct, getProductById, saveProduct, updateProduct, deleteProduct } from "../controllers/productController.js"
import express from 'express'

const router = express.Router()

router.get('/product', getProduct)
router.get('/product/:id', getProductById)
router.patch('/product/:id', updateProduct)
router.post('/product', saveProduct)
router.delete('/product/:id', deleteProduct)

export default router