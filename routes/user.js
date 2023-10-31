const express=require('express')
const router=express.Router()
const userController=require('../controllers/userController')
const user = require('../model/user')


router.get('/register',userController.register)
router.get('/login',userController.login)

router.post('/register',userController.create)
router.post('/login',userController.createSession)

module.exports=router;