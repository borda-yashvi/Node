const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require("cors")
app.use(cors("tiny"))
app.use(express.static('images'))
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

const img = require("./img_router")
app.use("/img",img)

const port = process.env.PORT
app.listen(port, ()=>{
  console.log(`server listening port = ${port}`);
});





