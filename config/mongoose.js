const mongoose=require('mongoose')

mongoose.connect(process.env.mongodbURL)

const db=mongoose.connection

db.on('error',console.error.bind(console,"Error in connecting MongoDB"))

db.once('open',function(){
    console.log("Connected to Database : MongoDb")
})

module.exports=db