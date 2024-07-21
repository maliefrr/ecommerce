import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT

const app = express()

app.listen(PORT, () => {
    console.log(`The app is running at ${process.env.BASE_URL}:${PORT}`)
})
