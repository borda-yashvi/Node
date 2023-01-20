
const express = require("express");
const Product = require("../models/productmodel");
require("dotenv/config")
const router=express()
router = express.Router()

router.get("/product",async(req,res)=>
{
    const category = await Category.findById(req.body.category)
    if(!category) return res.status(400).send("invaild category")

    let product = new Product({
             id:req.body.id,
            name:req.body.name,
            description:req.body.description,
            richdescription:req.body.richdescription,
            image:"image",
            images:req.body.images,
            brand:req.body.brand,
            price:req.body.price,
            category:req.body.category,
            countlnstock:req.body.countlnstock,
            rating:req.body.rating,
            isFeatured:req.body.isFeatured,
            datecreate:req.body.datecreate,
    })
          
    product = await product.save()

    // console.log(productdata.products);
    // const result=Product.insertMany(productdata.products);
    // res.send(result);
})

module.exports=router