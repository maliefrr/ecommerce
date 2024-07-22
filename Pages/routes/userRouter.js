import { Router } from "express"
import { indexPage } from "../controller/User/indexPage.js"
import { loginPage } from "../controller/Auth/loginPage.js"
import { registerPage } from "../controller/Auth/registerPage.js"

const router = Router()

router.get('/', indexPage)
router.get('/login', loginPage)
router.get('/register', registerPage)

export default router