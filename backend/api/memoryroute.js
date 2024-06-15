const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const Memory=require('../models/Memory')
router.post('/addmem',async (req,res)=>{
    try {
     let {img,text}=req.body;
   
     let data=await Memory.create({img,text});
     res.json(data);
    } catch (error) {
        res.json({});
    }
    

})
router.get('/getmem/:id',async (req,res)=>{
    try {
        let id=req.params;
        let prod=await Memory.find();
    res.json(prod);
    } catch (error) {
        res.json({});
    }
    
})
router.post('/delete/:id',async (req,res)=>{
    try {
    let {id}=req.params;
    console.log(id);
    let prod=await Memory.findById(id);
   
    await Memory.findByIdAndDelete(id);
    console.log(prod);
    res.json({msg:"deleted successfully"});
    } catch (error) {
        res.json({});
    }
    
})
router.post('/edit/:id',async (req,res)=>{
    try {
     let {img,text}=req.body;
     let {id}=req.params;
     
     let data=await Memory.findByIdAndUpdate(id,{img,text});
     res.json(data);
    } catch (error) {
        res.json({});
    }
    

})
module.exports=router;