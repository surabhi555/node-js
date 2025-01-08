const path=require('path')
const PORT = 3500;
const express = require('express')

const app = express()
//first route
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','index.html'))
})
//second route
app.get('/new-page',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','new-page.html'))
})
//regular expression
app.get('^/$|/index.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','index.html'))
})

app.get('/old-page',(req,res)=>{
    res.redirect(301,'new-page.html')
})

// app.get('/*',(req,res)=>{
//     res.status(404).sendFile(path.join(__dirname,'views','404.html'))
// })

//route handlers
app.get('/hello',(req,res,next)=>{
    console.log("attempted to load")
    next()
},(req,res)=>{
    res.send("hello surabhi")
})

const one=(req,res,next)=>{
    console.log('one')
    next()
}
const two=(req,res,next)=>{
    console.log('two')
    next()
}
const three=(req,res)=>{
    console.log('three')
}
app.get('/chain',[one,two,three])
app.listen(PORT , ()=>{
    console.log(`Server is running on the port ${PORT}`)
})