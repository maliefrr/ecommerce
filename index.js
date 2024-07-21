import express from 'express'
import dotenv from 'dotenv'
import UserRouter from './routes/userRouter.js'
import AdminRouter from './routes/adminRouter.js'
import AuthRouter from './routes/authRouter.js'
import ProductRouter from './routes/productRouter.js'

dotenv.config()

const PORT = process.env.PORT

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/api/user/",UserRouter)
app.use("/api/admin/",AdminRouter)
app.use("/api/auth/",AuthRouter)
app.use("/api/product/", ProductRouter)

app.listen(PORT, () => {
    console.log(`The app is running at ${process.env.BASE_URL}:${PORT}`)
})
