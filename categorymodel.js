const mongoose = require("mongoose")

const categorySchema = new mongoose.Schema({
     id:{type:String,require:true},
    name:{type:String,require:true},
    color:{type:String,require:true},
    icon:{type:String,require:true},
    image:{type:String,require:true},
})

const Category = mongoose.model("users",categorySchema)

module.exports=Category