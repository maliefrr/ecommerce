import { Router } from "express";
import { RegisterUser } from "../controller/User/Register.js";

const router = Router()

router.get('/', (req,res) => {
    res.send('user route')
})

router.post('/register',RegisterUser)


export default router