const express=require('express');
const router=express.Router();
const {homePage,getUser,saveUser}=require("../controllers/users.controller")

router.get("/",homePage)
router.get("/user",getUser)

router.post("/user",saveUser);

module.exports=router;
