const express=require('express')
const router=express.Router()
const adminController=require('../controllers/adminController')
const passport = require('passport')


router.get('/order',passport.checkAdmin,adminController.orderList)

router.post('/order/status',adminController.statusUpdate)

module.exports=router