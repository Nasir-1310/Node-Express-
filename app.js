const express=require('express');
const userRouter=require('./routes/users.route')
const app=express();
const PORT=3000;
app.use("/api/user",userRouter);

app.use("/register",(req,res)=>{
    // res.status(200).json({
    //     message :"Hi i am Nasir ",
    //      id :"My id is 1310",
    //      statuscode:200,
    // })
    res.statusCode=200;
    res.sendFile(__dirname+"/views/register.html")
   
});

app.use("/login",(req,res)=>{
    // res.cookie("name","Nasir");
    // res.cookie("age","25");
    res.clearCookie("name");
    res.append("id","1000");
    res.end();
});


app.use('/',(req,res)=>{
   res.statusCode=200;
   res.sendFile(__dirname+"/views/index.html");
});

app.use((req,res)=>{
    res.send("404 ! Not found");

})



module.exports=app;