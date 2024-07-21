import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const detailProduct = async (req,res) => {
    try {
        const data = await prisma.product.findMany({
            where: {
                id: req.params.id
            }
        })
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