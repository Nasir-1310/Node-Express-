const express=require('express');
const app=express();

const PORT=3000;

app.get('/about/:id([0-9a-z]+)',(req,res)=>{
    res.send(`id is : ${req.params.id}`);
});

app.use("*",(req,res)=>{
    res.status(404).send({
        message:"Not Found! 404"
    })
})

app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`);
})