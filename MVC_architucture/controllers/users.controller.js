const users=require("../models/users.model")
const products=require("../models/products.model")
const path=require('path');


exports.homePage=(req,res)=>{
    res.send("Running server");
}

exports.getUser=(req,res)=>{
    res.sendFile(path.join(__dirname+"/../views/index.html"));
    
}

exports.getProduct=(req,res)=>{
    res.sendFile(path.join(__dirname+"/../views/product.html"));
}

exports.saveUser=(req,res)=>{
    const name=req.body.name;
    const age=Number(req.body.age);
    const user={
     name,
     age,
    };
    users.push(user);
    res.status(201).json({
     success: true,
     users,
    })
 }

 
exports.saveProduct=(req,res)=>{
    const name=req.body.name;
    const price=Number(req.body.price);
    const product={
     name,
     price,
    };
    products.push(product);
    res.status(201).json({
     success: true,
     products,
    })
 }

//  module.exports=saveUser;
//  module.exports=getUser;