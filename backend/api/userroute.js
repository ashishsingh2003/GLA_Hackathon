const express=require('express');
const router=express.Router();
const User=require('../models/User')
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const mongoose=require('mongoose');
const generatetoken=(id)=>{
    return jwt.sign({id},"ashish",{
        expiresIn:"30d",
    })
}
router.post('/register',async (req,res)=>{
    let {username,email,password}=req.body;
     let userexist=await User.findOne({username});
      if(userexist)
        {
            res.json({"msg":"already exist"});
        }
       const hashpassword=await bcrypt.hash(password,10);
       console.log(hashpassword);
       let user=await User.create({
        username,
        email,
        password:hashpassword
       })
       if(user){
        res.json({
            _id:user.id,
            username:user.username,
            email:user.email,
            password:user.password,
            token:generatetoken(user._id),
        })
      }
      else{
        res.status(400)
        throw new Error("user can not be created");
      }

       
})
router.post('/login',async (req,res)=>{
    let {email,password}=req.body;
    let user=await User.findOne({email});
    
    if(user)
    {
        await bcrypt.compare(password,user.password,((err,result)=>{
            if(result)
                {
                    res.json(user);
                }
                else{
                    res.json("error");
                }
        }))
    }
    else{
        res.json("no user found");
    }
})
module.exports=router;
