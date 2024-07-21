import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const protect = async (req, res, next) =>  {
    let token

    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.SECRET);

            req.user = await prisma.user.findMany({
                where: {
                    id: decoded.id
                }
            })
            next()
        } catch (error) {
            console.error(error)
        }
    }
    if(!token){
        res.status(401).json({
            statusCode: 401,
            message: "Not Authorized, no token"
        })
    }
}