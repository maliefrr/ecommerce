import { Router } from "express"
import { addCategoryPage } from "../controller/Auth/addCategoryPage.js"


const router = Router()

router.get('/add-category', addCategoryPage)


export default router