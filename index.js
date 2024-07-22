import express from 'express'
import dotenv from 'dotenv'
import expressEjsLayouts from 'express-ejs-layouts'
import UserRouter from './routes/userRouter.js'
import AdminRouter from './routes/adminRouter.js'
import AuthRouter from './routes/authRouter.js'
import ProductRouter from './routes/productRouter.js'
import UserViewRouter from './Pages/routes/userRouter.js'
import AdminViewRouter from './Pages/routes/adminRouter.js'

dotenv.config()

const PORT = process.env.PORT

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.set("view engine", "ejs");
app.use(expressEjsLayouts)
app.use(express.static("public"));

app.use("/api/user/",UserRouter)
app.use("/api/admin/",AdminRouter)
app.use("/api/auth/",AuthRouter)
app.use("/api/product/", ProductRouter)

app.use('/', UserViewRouter)
app.use('/admin', AdminViewRouter)

app.listen(PORT, () => {
    console.log(`The app is running at ${process.env.BASE_URL}:${PORT}`)
})
