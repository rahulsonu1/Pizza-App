const express=require('express')
const router=express.Router()
const cartController=require('../controllers/cartController')

router.get('/',cartController.cart)
<<<<<<< HEAD
router.post('/update',cartController.update)
router.get('/update',cartController.update)
=======
>>>>>>> parent of 07118ec (fetching data to server)

module.exports=router;