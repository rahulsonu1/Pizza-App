const User=require('../model/user')
const Order=require('../model/order')
const moment=require('moment')

module.exports.register=function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/cart')
    }
    return res.render('signUp',{
        title:"register"
    })
}

module.exports.login=function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/cart')
    }
    return res.render('SignIn',{title:"login"})
}

module.exports.create= async function(req,res){
    try {
        const user=await User.findOne({email:req.body.email})
        if(!user){
            User.create(req.body)
            return res.redirect('/user/login')
        }
        else{
            return res.redirect('back')
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports.createSession = function (req, res) {
    if (req.isAuthenticated() && req.user.role==='customer') {
        req.flash('success',"Logged in successfully as customer")
        return res.redirect('/user/orders');
    }
    else if(req.isAuthenticated() && req.user.role==='admin'){
        req.flash('success',"Logged in successfully as admin")
        return res.redirect('/admin/order')
    }
    return res.redirect('/user/login');
};

module.exports.destroySession=function(req,res){
    req.logout(function(err) {
        if (err) { return next(err); }
        return res.redirect('/home');
      });
}


module.exports.orderList=async function(req,res){
    try {
        const order=await Order.find({customerId:req.user.id},null,{
            sort:{'createdAt':-1}
        })
        return res.render('order',{title:"orderList",
        order,moment
        })
        
    } catch (error) {
        console.log(error)
    }
}