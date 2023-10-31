const User=require('../model/user')

module.exports.register=function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/home')
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
        const {name,email,password}=req.body
        const user=await User.findOne()
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

module.exports.createSession=function(req,res){
    return res.redirect('/cart');
}