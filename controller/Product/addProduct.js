import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const addProduct = async (req,res) => {
    try {
        const {name,description,imageUrl,categoryId, price} = req.body
        
        if (!name || !categoryId, !price) {
            res.status(400).json({
                message: 'Product name, Category, and price are required'
            })
        } else {
            const checkProduct = await prisma.product.findUnique({
                where: {
                    name,
                    categoryId: parseInt(categoryId)
                }
            })
            if(checkProduct) {
                res.status(400).json({
                    message: 'Product already exist'
                })
            } else {
                if(req.user[0].role !== 'ADMIN') {
                    res.status(401).json({
                        message: 'User unauthorized'
                    })
                } else {
                    await prisma.product.create({
                        data: {
                            name,
                            description,
                            imageUrl,
                            categoryId: parseInt(categoryId),
                            price: parseInt(price)
                        }
                    })
                    res.status(201).json({
                        message: 'Product has been successfully created'
                    })
                }
            }
        }
    } catch (error) {
        console.error(error)
    }
}