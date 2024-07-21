import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const addCategory = async (req,res) => {
    try {
        const {name} = req.body
        if(!name) {
            res.status(400).json({
                message: 'Category name is required'
            })
        } else {
            const checkCategory = await prisma.category.findMany({
                where: {
                    name
                }
            })
            if(checkCategory.length < 0) {
                if(req.user[0].role !== 'ADMIN') {
                    res.status(401).json({
                        message: 'User unauthorized'
                    })
                } else {
                    await prisma.category.create({
                        data: {
                            name
                        }
                    })
                    res.status(201).json({
                        message: 'category successfully added'
                    })
                }
            } else {
                res.status(400).json({
                    message: 'Category already exist'
                })
            }
        } 
    } catch (error) {
        console.error(error)
    }
    
}