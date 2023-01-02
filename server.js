const express = require("express");
const app = express();
const port = 3003;

app.get("/",(req,res)=>
{
    res.json({msg:"Hello"});
    console.log("Hello")
});

app.get("/log",(req,res)=>
{
    res.json({msg:"login"});
    console.log("log")
});

app.listen(port,()=>
{
    console.log(`server listining on port ${port}`);
});