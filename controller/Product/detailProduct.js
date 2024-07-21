import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const detailProduct = async (req,res) => {
    try {
        const data = await prisma.product.findUnique({
            where: {
                id: parseInt(req.params.id)
            }
        })
        console.log(data)
        if(!data) {
            res.status(404).json({
                message: "Data not found"
            })
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