const express = require('express'); 
const signupRouter = express.Router();
const user = require('../data/user');

signupRouter.get('/',function(req,res){

    res.render('signup',{});
    
})

signupRouter.get("/adduser",function(req,res){
    
    var newuser = {
        "uid":req.param("uid"),
        "pwd":req.param("pwd")
    };
    console.log(newuser);
    console.log(user);
    user.push(newuser);
    append_data (user , newuser);
   // console.log(user);
    res.redirect("/login");
})

module.exports = signupRouter;