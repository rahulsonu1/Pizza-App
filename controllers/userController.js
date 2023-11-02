const User=require('../model/user')

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
    if (req.isAuthenticated()) {
        return res.redirect('/home');
    }
    return res.redirect('/user/login');
};

module.exports.destroySession=function(req,res){
    req.logout(function(err) {
        if (err) { return next(err); }
        return res.redirect('/home');
      });
}