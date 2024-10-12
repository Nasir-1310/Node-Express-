const express = require('express')
const app = express()
const router = express.Router()
app.use(express.static("public"));
const PORT = 3000;


app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

app.listen(PORT, () =>{ 
    console.log(`Example app listening on http://localhost:${PORT}`);
});