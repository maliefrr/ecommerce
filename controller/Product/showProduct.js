import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const showProduct = async (req,res) => {
    try {
        const data = await prisma.product.findMany()
        if(data.length < 1) {
            res.status(204)
        } else {
            res.status(200).json({
                message: 'Successfully get the data',
                data
            })
        }
    } catch (error) {
        console.error(error)
    }
}