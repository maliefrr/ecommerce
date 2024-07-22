import { Router } from "express"
import { addCategoryPage } from "../controller/Admin/addCategoryPage.js"
import { addProductPage } from "../controller/Admin/addProductPage.js"
import { showAllUsersPage } from "../controller/Admin/showAllUsersPage.js"


const router = Router()

router.get('/add-category', addCategoryPage)
router.get('/add-product', addProductPage)
router.get('/users/all', showAllUsersPage)


export default router