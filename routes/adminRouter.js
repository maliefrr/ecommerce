import { Router } from "express"
import { RegisterAdmin } from "../controller/Admin/Register.js"

const router = Router()

router.get('/',(req,res) => {
    res.send('admin router')
})

router.post('/register',RegisterAdmin)


export default router