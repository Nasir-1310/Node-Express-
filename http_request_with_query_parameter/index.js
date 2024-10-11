const express=require('express');
const app =express();
const PORT=3001;

//request purey paramenter 
// app.get('/',(req,res)=>{
// //    const id=req.query.id;
// //    const name=req.query.name;
// const {id ,name}=req.query;
//    res.send(`Student id : ${id} name is : ${name}`);
// })

//routes parameter :
// app.get("/userid/:id/age/:age/name/:name",(req,res)=>{
//     const id=req.params.id;
//     const age=req.params.age;
//     const name=req.params.name;
//     res.send(`id is :${id} and age: ${age} name is :${name}`);
// })
//request for header
app.get("/",(req,res)=>{
    const id=req.header('id');
    const age=req.header('age');
    const name=req.header('name');
    res.send(`id is :${id} and age: ${age} name is :${name}`);
})

app.listen(PORT,()=>{
    console.log(`Listening with http://localhost:${PORT}`);
})
