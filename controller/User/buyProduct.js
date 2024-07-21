import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const buyProduct = async (req,res) => {
    try {
        const { userId, productId, quantity, amount } = req.body;
        const user = await prisma.user.findUnique({
            where: { id: userId }
          });
      
          if (!user) {
            return res.status(404).json({ error: "User not found" });
          }
      
          const product = await prisma.product.findUnique({
            where: { id: productId }
          });
      
          if (!product) {
            return res.status(404).json({ error: "Product not found" });
          }

          const sale = await prisma.sale.create({
            data: {
              productId,
              quantity,
              total: amount,
            },
          });

          const paymentConfirmation = await prisma.paymentConfirmation.create({
            data: {
              userId,
              saleId: sale.id,
              amount,
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