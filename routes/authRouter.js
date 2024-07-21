import { Router } from "express";
import { Login } from "../controller/Auth/Login.js";

const router = Router()

router.get('/', (req,res) => {
    res.send('Auth Router')
})

router.post("/login", Login)

export default router