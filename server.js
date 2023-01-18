const express = require("express")
const mongoose = require("mongoose")
const node_1 = require("node_1")
const app=express()
const port=3030

app.use(express.json())
app.use(cors())

app.listen(port,()=>
{
    console.log(`server listening port ${port}`)
})

// npm i express mongoose morgan cors nodemon dotenv