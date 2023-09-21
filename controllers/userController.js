module.exports.register=function(req,res){
    return res.render('signUp',{
        title:"register"
    })
}

module.exports.login=function(req,res){
    return res.render('SignIn',{title:"login"})
}