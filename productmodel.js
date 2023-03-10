const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
     id:{type:String,require:true},
    name:{type:String,require:true},
    description:{type:String,require:true},
    richdescription:{type:String,require:true},
    image:{type:String,require:true},
    images:{type:String,require:true},
    brand:{type:String,require:true},
    price:{type:Number,require:true},
    category:{type:mongoose.Schema.Types.ObjectId,require:true},
    countlnstock:{type:Number,require:true},
    rating:{type:Number,require:true},
    isFeatured:{type:Boolean,require:true},
    datecreate:{type:Date,require:true},
})

const Product = mongoose.model("products",productSchema)

module.exports=Product