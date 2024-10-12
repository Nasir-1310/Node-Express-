const express=require('express');
const app=express();
app.use(express.urlencoded({extended : true}));
const homeRouter=require("./routes/home.route");
const userRouter=require("./routes/user.route");
const productRouter=require("./routes/product.route");

app.use(homeRouter);
app.use(userRouter);
app.use(productRouter);
const PORT=3000;





app.listen(PORT,()=>{
    console.log(`Server Ruinning on http://localhost:${PORT}`);
})