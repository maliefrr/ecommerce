import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"

const prisma = new PrismaClient()

export const RegisterUser = async (req,res) => {
    try {
        const {username,password} = req.body
        if(!username || !password) {
            res.status(400).json({
                message: 'username and password are required'
            })
        }
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password,salt)
        const isExist = await prisma.user.findMany({
            where: {
                username
            }
        })
        console.log(isExist)
        if(isExist.length > 0) {
            res.status(400).json({
                message: 'User already exist'
            })
        } else {
            await prisma.user.create({
                data: {
                    username: username,
                    password: hashPassword,
                }
            })
            res.status(200).json({
                message: 'data has been saved'
            })
        }

    } catch (error) {
        console.error(error)
    }
}