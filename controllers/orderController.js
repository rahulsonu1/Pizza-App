const Order=require('../model/order')
const User=require('../model/user')

module.exports.Store=async function(req,res){
   try {
    const {phone,address}=req.body
    if(!phone||!address){
        console.log("phone or address missing")
    }
    const order=await new Order({
        customerId:req.user.id,
        items:req.session.cart.items,
        phone,
        address,
    })
    
    await Order.create(order)
    
    const eventEmitter=req.app.get('eventEmitter')
        eventEmitter.emit('orderPlaced',order)

    req.flash('success',"Order placed!")
    return res.redirect('/')
    
   } catch (error) {
    console.log(error)
    return res.redirect('/cart')
   }
}


module.exports.OrderShow= async function(req,res){
    try {
        const order=await Order.findById(req.params.id)
        if(req.user.id.toString()===order.customerId.toString()){
          return res.render('singleOrder',{order,title:"orderStatus"})
        }
          return res.redirect('/')
    } catch (error) {
        
    }
}