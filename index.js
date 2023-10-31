require('dotenv').config()
const express=require('express')
const app=express()
const path=require('path')
const db=require('./config/mongoose')
const ejs=require('ejs')
const ejsLayout=require('express-ejs-layouts')
const sassMiddleware=require('node-sass-middleware')
const passport=require('passport')
const LocalStrategy=require('./config/passport_Local')


const parser=require('cookie-parser')
const session=require('express-session')
const MongoStore=require('connect-mongo')


app.use(express.urlencoded())
app.use(ejsLayout)
app.set('layout extractStyles',true)
app.set('layout extractScripts',true)
app.use(parser())
app.use(express.json())

app.use(sassMiddleware({
    src:'./assets/sass',
    dest:'./assets/css',
    debug:false,
    outputStyle:'expanded',
    prefix:'/css'

}))



app.use(express.static('assets'))


app.use(session({
    name:"pizza",
    secret:process.env.Cookie_secret,
    saveUninitialized:false,
    resave:false,
    cookie:{maxAge:1000*60*500},
    store:MongoStore.create({
        mongoUrl: 'mongodb://localhost/Pizza',
        autoRemove:'disabled'
    })
}))

app.use((req,res,next)=>{
    res.locals.session=req.session
    res.locals.user=req.user
    next()
})

app.use(passport.initialize())
app.use(passport.session())
app.use(passport.setAuthenticatedUser)
app.set('view engine','ejs')
app.set('views','./views')

app.use('/',require('./routes'))



const Port=process.env.PORT||8000
app.listen(Port,function(err){
    if(err){console.log("error in listening")}
    console.log(`Server is running at port ${Port}`)
})