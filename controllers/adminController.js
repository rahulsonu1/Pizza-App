const Order=require('../model/order')


module.exports.orderList=async function(req,res){
    try {
        const orders=await Order.find({status:{$ne:'completed'}},null,{sort:{'createdAt':-1}}).populate('customerId','-password')
        if(req.xhr){
            return res.json(orders)
        }
        return res.render('adminOrder',{orders,title:"orderList"})
        
    } catch (error) {
        console.log(error)
    }
}

module.exports.statusUpdate=async function(req,res){
    try {
        const order=await Order.updateOne({_id:req.body.orderId},{ $set: { status: req.body.status } })
        const eventEmitter=req.app.get('eventEmitter')
        eventEmitter.emit('orderUpdated',{id:req.body.orderId,status:req.body.status})


        return res.redirect('back')
        
        
    } catch (error) {
        console.log(error)
    }
}