import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const addProduct = async (req,res) => {
    try {
        const {name,description,imageUrl,categoryId} = req.body
        
        if (!name || !categoryId) {
            res.status(400).json({
                message: 'Product name and Category are required'
            })
        } else {
            const checkProduct = await prisma.product.findMany({
                where: {
                    name,
                    categoryId: parseInt(categoryId)
                }
            })
            if(checkProduct.length > 0) {
                res.status(400).json({
                    message: 'Product already exist'
                })
            } else {
                await prisma.product.create({
                    data: {
                        name,
                        description,
                        imageUrl,
                        categoryId: parseInt(categoryId)
                    }
                })
                res.status(201).json({
                    message: 'Product has been successfully created'
                })
            }
        }
    } catch (error) {
        console.error(error)
    }
}