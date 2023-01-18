const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
     id:{type:String,require:true},
    orderitem:{type:orderitem,require:true},
    shippingaddress1:{type:String,require:true},
    shippingaddress2:{type:String,require:true},
    ciyt:{type:String,require:true},
    zip:{type:String,require:true},
   country:{type:String,require:true},
   phone:{type:Number,require:true},
   status:{type:String,require:true},
   totalprice:{type:Number,require:true},
   user:{type:mongoose.Schema.Types.ObjectId,require:true},
   deleteitem:{type:date,require:true},
})

const Order = mongoose.model("orders",orderSchema)

module.exports=Order