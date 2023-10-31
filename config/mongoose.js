const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/Pizza')

const db=mongoose.connection

db.on('error',console.error.bind(console,"Error in connecting MongoDB"))

db.once('open',function(){
    console.log("Connected to Database : MongoDb")
})

module.exports=db