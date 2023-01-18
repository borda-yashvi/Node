const mongoose = require("mongoose")

const otherSchema = new mongoose.Schema({
     id:{type:String,require:true},
     product:{type:mongoose.Schema.Types.ObjectId,require:true},
    quantity:{type:Number,require:true},
})

const Other = mongoose.model("others",otherSchema)

module.exports=Other