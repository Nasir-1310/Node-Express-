const express = require('express')
const app = express()
const router = express.Router()
const PORT = 3000;

const myMIddleWare=(req,res,next)=>{
    console.log("middleware working");
    req.currentTime=new Date(Date.now());
    next();
}




// app.get('/',myMIddleWare, (req, res) =>{
//     console.log("Time: "+req.currentTime);
//     res.send('Hello Home routes!')
   
   
// });

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })


app.listen(PORT, () =>{ 
    console.log(`Example app listening on http://localhost:${PORT}`);
});