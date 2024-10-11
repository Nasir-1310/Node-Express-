const express=require('express');
const { route } = require('../app');
const router=express.Router();



router.get('/register',(req,res)=>{
    res.send("i am get request from Register route");
    res.end();
})
router.get('/login',(req,res)=>{
    res.send("<h1>i am get request at to Login route</h1>");
    res.end();
});

module.exports=router;