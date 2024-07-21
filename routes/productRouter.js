import { Router } from "express"
import { addCategory } from "../controller/Product/addCategory.js"
import { addProduct } from "../controller/Product/addProduct.js"
import { showProduct } from "../controller/Product/showProduct.js"
import { protect } from "../utils/protect.js"
import { detailProduct } from "../controller/Product/detailProduct.js"
import { buyProduct } from "../controller/User/buyProduct.js"
import { updatePaymentConfirmation } from "../controller/Admin/updatePaymentConfirmation.js"

const router = Router()

router.get('/', showProduct)
router.get('/:id',detailProduct)

router.post('/add-category', protect, addCategory)
router.post('/add-product', protect, addProduct)
router.post('/buy', protect, buyProduct)
router.post('/update-payment-confirmation', protect, updatePaymentConfirmation)


export default router