import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const checkUser = async (req,res) => {
    try {
        if(req.user[0].role !== 'ADMIN') {
            res.status(401).json({
                message: 'User unauthorized'
            })
        } else {
            const data = await prisma.user.findMany({
                where: {
                    role: 'USER'
                }
            })
            res.status(200).json({
                message: 'successfully getting the data',
                data
            })
        }
    } catch (error) {
        console.error(error)
    }
}