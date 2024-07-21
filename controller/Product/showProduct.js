import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const showProduct = async (req,res) => {
    try {
        const data = await prisma.product.findMany()
        if(data.length < 1) {
            res.status(204).json({
                message: 'No Content'
            })
        } else {
            res.status(200).json({
                message: 'Successfully get the data',
                data: data
            })
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({
            message: 'Internal Server Error'
        })
    }
}