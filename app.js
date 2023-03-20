const express = require('express');
const Joi = require('joi')
const app = express();
const mongoose = require('mongoose');
const cors = require("cors")
require("dotenv/config")
app.use(cors("tiny"))
app.use(express.json())
mongoose.set("strictQuery",true)

const uri = "mongodb://127.0.0.1:27017/img"
mongoose.connect(uri,{
 useNewUrlParser : true,
 useUnifiedTopology :true,
})
.then(()=>{
    console.log("databse connection success")
})
.catch((err)=>{
    console.log(err)
})


app.get("/apis",(req,res)=>{
    res.send([123])
})

app.get("/api/:name/:pwd",(req,res)=>{
    res.send(req.params)
})

app.get("/api",(req,res)=>{
    res.send(req.query)
})

const data = [
    {
       id:1,
       name:"yashvi" 
    },
    {
        id:2,
       name:"rgrfdc" 
    },
    {
        id:3,
       name:"ikoik,m" 
    }]

app.get("/data/:id",(req,res)=>{
    const datas = data.find(c=>c.id===parseInt(req.params.id))
    if(!datas) res.status(404).send("id was not found")
    res.send(datas)
})

app.post("/data/xyz",(req,res)=>{
    const schema = {
        name:Joi.string().min(3).required()
    }
    const result = Joi.validate(req.body, schema)
    // console.log(result)
    if(result.error){
        res.send(result.error.details[0].message)
        return
    }

    // if(!req.body.name||req.body.name.length<3) {
    //     res.status(404).send(result.error.details[0].message)
    //     return
    // }
    const datas = {
        id:data.length+1,
        name:req.body.name
    }
    data.push(datas)
    res.send(datas)
})


// const mail = require("./mail")
// app.use("/mail",mail)

const port = process.env.PORT
app.listen(port, ()=>{
  console.log(`server listening port = ${port}`);
});



