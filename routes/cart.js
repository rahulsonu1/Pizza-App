const express=require('express')
const router=express.Router()
const cartController=require('../controllers/cartController')

router.get('/',cartController.cart)
router.post('/update',cartController.update)

module.exports=router;