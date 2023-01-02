const express = require("express");
login = express.Router();

login.get("/",(req,res)=>
{
    res.json({"msg":"Inside"})
})

login.post("/postlogin",(req,res)=>
{
    res.json({"msg":"inside post login"});
    console.log(req.body);
    console.log(req.body);
});

module.exports = login;
