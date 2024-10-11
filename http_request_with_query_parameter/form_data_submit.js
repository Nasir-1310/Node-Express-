const express=require('express');
var bodyParser = require('body-parser')
const app =express();
const PORT=3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/register",(req,res)=>{
    res.sendFile(__dirname+"/registration.html")
})

app.post("/register",(req,res)=>{
   
   const fullName=req.body.fullName;
   const age=req.body.age;
   res.send(`Hellow ${fullName} your age is :${age}`);
  

})

app.listen(PORT,()=>{
    console.log(`Listening with http://localhost:${PORT}`);
})
