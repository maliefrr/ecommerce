import { Router } from "express"
import { addCategory } from "../controller/Product/addCategory.js"
import { addProduct } from "../controller/Product/addProduct.js"

const router = Router()

router.post('/add-category', addCategory)
router.post('/add-product', addProduct)


export default router