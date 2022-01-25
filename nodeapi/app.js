const express = require('express')
require('./db/mongoose')
const userRouter=require("./routers/user")
// const Emp = require('../models/dummyuser') // Link to your user model 

const app = express()


app.use(express.json())
app.use(userRouter)

// app.listen(port, () =>{
//     console.log("Server is up on port " + port)
// })

module.exports=app