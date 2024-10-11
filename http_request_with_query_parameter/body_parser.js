const express=require('express');
var bodyParser = require('body-parser')
const app =express();
const PORT=3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/",(req,res)=>{
    const id=req.body.id;
    const age=req.body.age
    const name=req.body.name;
    res.send(`id is :${id} and age: ${age} name is :${name}`);
})

app.listen(PORT,()=>{
    console.log(`Listening with http://localhost:${PORT}`);
})
