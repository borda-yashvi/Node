const express = require("express");
const app = express();
const port = 3030;

app.use(express.json());

app.get("/",(req,res)=>
{
    res.json({msg:"Hello"});
});

const login = require("./login")
app.use("/login",login)

app.listen(port,()=>
{
    console.log(`server listining on port ${port}`);
})

// { uname: 'fhhj', upwd: 'huj' }