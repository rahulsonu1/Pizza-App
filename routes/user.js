const express=require('express')
const router=express.Router()
const userController=require('../controllers/userController')
const orderController=require('../controllers/orderController')
const passport = require('passport')

router.get('/register',userController.register)
router.get('/login',userController.login)

router.post('/register',userController.create)

router.post('/login', passport.authenticate('local', { failureRedirect: '/user/login',
}),userController.createSession)

router.get('/logout',userController.destroySession)

router.get('/orders',passport.checkAuthentication,userController.orderList)

router.get('/orders/:id',orderController.OrderShow)

module.exports=router;