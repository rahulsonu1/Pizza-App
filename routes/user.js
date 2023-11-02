const express=require('express')
const router=express.Router()
const userController=require('../controllers/userController')
const passport = require('passport')

router.get('/register',userController.register)
router.get('/login',userController.login)

router.post('/register',userController.create)

router.post('/login', passport.authenticate('local', { failureRedirect: '/user/login',
}),userController.createSession)

router.get('/logout',userController.destroySession)

module.exports=router;