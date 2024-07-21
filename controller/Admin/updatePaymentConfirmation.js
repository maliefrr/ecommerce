import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const updatePaymentConfirmation = async (req, res) => {
    const { paymentConfirmationId, status } = req.body;
  
    if (!['PENDING', 'CONFIRMED', 'REJECTED'].includes(status)) {
      return res.status(400).json({ error: "Invalid status value" });
    }
    try {
      if(req.user[0].role !== 'ADMIN') {
        res.status(401).json({
            message: 'User unauthorized'
        })
      } else {
          const paymentConfirmation = await prisma.paymentConfirmation.update({
            where: { id: parseInt(paymentConfirmationId) },
            data: {
              status,
              confirmedAt: status === 'CONFIRMED' ? new Date() : null,
            },
          });
      
          res.status(200).json({
            message: "Payment confirmation status updated successfully",
            paymentConfirmation,
          });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  };