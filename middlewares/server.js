const express=require('express')

const app = express()

const path=require('path')

const cors = require('cors')

const {logger} = require('./customMiddleware/logEvents.js')

const errorHandler = require('./customMiddleware/errorHandler.js')

const PORT = 4000;
//custom middleware logger
app.use(logger)
//Cross Origin Resource Shairing
app.use(cors())



//built-in middleware to handle url-encoded data
app.use(express.urlencoded({extended:false}));

//built-in middleware for json
app.use(express.json())

//built-in middleware to serve static files

// app.use(express.static(path.join(__dirname,'/public/im')))

app.get('/index',(req,res)=>{
    res.sendFile(__dirname,'views','index.html')
})
app.all('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','404.html'))
})

app.use(errorHandler)

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})