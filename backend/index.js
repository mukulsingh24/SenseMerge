const express = require('express')
const cors = require('cors')
const nodemon = require('nodemon')
const multer = require('multer')

const app = express()
app.use(cors())
app.use(nodemon())
app.use(multer())
const port = 5000

app.listen(port,()=>{
    console.log("Server is Running")
})

