
const path=require('path');


exports.homePage=(req,res)=>{
    res.sendFile(path.join(__dirname+"/../views/home.html"));
}

//  module.exports=saveUser;
//  module.exports=getUser;