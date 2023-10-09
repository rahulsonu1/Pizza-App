const Menu=require('../models/menu')


module.exports.Home= async function(req,res){
    try {
        const menu=await Menu.find();
        return res.render('home',{menu:menu,title:"Home"})
    } catch (error) {
        
    }
}