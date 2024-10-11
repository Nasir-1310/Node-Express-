const express=require('express');
require("dotenv").config();

const app =express();
const PORT=process.env.PORT || 3000;

app.get("/",(req,res)=>{
   
    res.send("Hellow i am from Home route");
});

app.listen(PORT,()=>{
    console.log(`Listening with http://localhost:${PORT}`);
})
