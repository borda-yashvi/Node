const express = require("express");
const app = express();
const port = 3030;
app.use(express.json());
app.use(express.urlencoded());

app.get("/log",(req,res)=>
{
    res.sendFile(__dirname + "/index.html");
});

app.post("/log",(req,res)=>
{
    const request = req.body;
    console.log("Data",request);
});

app.listen(port,()=>
{
    console.log(`server listining on port ${port}`);
});