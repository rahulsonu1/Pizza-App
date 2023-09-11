const express=require('express')
const app=express()
const db=require('./config/mongoose')




app.use(express.static('assets'))
app.use('/',require('./routes'))


app.listen(8000,function(err){
    if(err){console.log("error in listening")}
    console.log("Server is running at port 8000")
})