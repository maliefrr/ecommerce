import { Router } from "express"
import { addCategoryPage } from "../controller/Admin/addCategoryPage.js"
import { addProductPage } from "../controller/Admin/addProductPage.js"


const router = Router()

router.get('/add-category', addCategoryPage)
router.get('/add-product', addProductPage)


export default router