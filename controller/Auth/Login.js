import { PrismaClient } from "@prisma/client"
import bcrypt from 'bcryptjs'
import { getToken } from "../../utils/generateToken.js"

const prisma = new PrismaClient()

export const Login = async (req,res) => {
    const {username,password} = req.body
    if(!username || !password) {
        res.status(400).json({
            message: 'username and password are required'
        })
    }
    const checkUser = await prisma.user.findUnique({
        where: {
            username
        }
    })
    if(checkUser) {
        const isAuthorized = await bcrypt.compare(password,checkUser.password)
        if(isAuthorized) {
            res.status(200).json({
                message: 'Login Success',
                token: getToken(checkUser.id)
            })
        } else {
            res.status(401).json({
                message: 'username or password are incorrect'
            })
        }
    } else {
        res.status(401).json({
            message: 'username or password are incorrect'
        })

    }
}