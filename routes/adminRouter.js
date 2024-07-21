import { Router } from "express"
import { RegisterAdmin } from "../controller/Admin/Register.js"
import { checkUser } from "../controller/Admin/checkUser.js"
import { protect } from "../utils/protect.js"

const router = Router()

router.get('/',(req,res) => {
    res.send('admin router')
})

router.get('/users/all', protect, checkUser)

router.post('/register',RegisterAdmin)


export default router