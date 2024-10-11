const express=require('express');
const app=express();
const bodyParser=require('body-parser');

const PORT=3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/shapes/index.html");
})

app.get("/circle",(req,res)=>{
    res.sendFile(__dirname+"/shapes/circle.html");
})
app.get("/triangle",(req,res)=>{
    res.sendFile(__dirname+"/shapes/triangle.html");
})



app.post("/circle",(req,res)=>{
   const radious=req.body.radious;
   const area=3.1416*radious*radious;
   res.send(`Area of circle : ${area}`);
   
})
app.post("/triangle",(req,res)=>{
    const height=req.body.height;
    const base=req.body.base;
    const area=0.5*base*height;
    res.send(`Area of Triangle : ${area}`);
    
 })


app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
})