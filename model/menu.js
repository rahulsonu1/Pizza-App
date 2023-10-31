const mongoose=require('mongoose')

const menuSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:String
    },
    size:{
        type:String,
        required:String
    }
})

const Menu= mongoose.model('Menu',menuSchema)

module.exports=Menu