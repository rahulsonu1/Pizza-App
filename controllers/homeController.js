
<<<<<<< HEAD

module.exports.Home= async function(req,res){
    try {
        const menu=await Menu.find();
        return res.render('home',{menu:menu,title:"Home"})
    } catch (error) {
        
    }
=======
module.exports.Home=function(req,res){
    return res.render('home',{title:"home"})
>>>>>>> parent of 07118ec (fetching data to server)
}