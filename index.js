const express=require('express')
const app=express()
const db=require('./config/mongoose')
const ejs=require('ejs')
const ejsLayout=require('express-ejs-layouts')
const sassMiddleware=require('node-sass-middleware')


app.use(ejsLayout)
app.set('layout extractStyles',true)
app.set('layout extractScripts',true)

app.use(sassMiddleware({
    src:'./assets/sass',
    dest:'./assets/css',
    debug:true,
    outputStyle:'expanded',
    prefix:'/css'

}))



app.use(express.static('assets'))
app.use('/',require('./routes'))


app.set('view engine','ejs')
app.set('views','./views')


const Port=process.env.PORT||8000
app.listen(Port,function(err){
    if(err){console.log("error in listening")}
    console.log(`Server is running at port ${Port}`)
})