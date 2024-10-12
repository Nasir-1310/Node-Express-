const express=require('express');
const app=express();
app.use(express.urlencoded({extended : true}));
const userRouter=require("./routes/user.route")
app.use(userRouter);
const PORT=3000;





app.listen(PORT,()=>{
    console.log(`Server Ruinning on http://localhost:${PORT}`);
})