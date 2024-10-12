const express=require('express');
const router=express.Router();

const {getProduct,saveProduct}=require("../controllers/products.controller")

router.get("/product",getProduct);

router.post("/product",saveProduct);


module.exports=router;
