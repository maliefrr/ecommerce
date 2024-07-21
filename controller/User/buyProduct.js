import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const buyProduct = async (req,res) => {
    try {
        const { productId, quantity} = req.body;
        const user = await prisma.user.findUnique({
            where: { id: parseInt(req.user[0].id) }
          });
      
          if (!user) {
            return res.status(404).json({ error: "User not found" });
          }
      
          const product = await prisma.product.findUnique({
            where: { id: parseInt(productId) }
          });
      
          if (!product) {
            return res.status(404).json({ error: "Product not found" });
          }

          const sale = await prisma.sale.create({
            data: {
              productId: parseInt(productId),
              quantity: parseInt(quantity),
              total: parseInt(quantity) * parseInt(product.price) ,
            },
          });

          const paymentConfirmation = await prisma.paymentConfirmation.create({
            data: {
              userId : parseInt(req.user[0].id),
              saleId: parseInt(sale.id),
              amount: parseInt(quantity) * parseInt(product.price),
              status: "PENDING"
            },
          });
      
          res.status(201).json({
            message: "Product purchased successfully, awaiting payment confirmation",
            sale,
            paymentConfirmation,
          });

        } catch (error) {
          console.error(error);
          res.status(500).json({ error: "Internal server error" });
        }
}