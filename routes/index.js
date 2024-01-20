const express=require('express')
const router=express.Router()

router.use('/home',require('./home'))
router.use('/cart',require('./cart'))
router.use('/user',require('./user'))
router.use('/order',require('./order'))
router.use('/admin',require('./admin'))

module.exports=router;