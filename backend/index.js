const express=require('express');
const app=express();
const cors=require('cors');
const dotenv=require('dotenv');
dotenv.config("");
const userroute=require('./api/userroute');
const mongoose=require('mongoose');

app.use(express.urlencoded({extended:true}));

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/Time_capsule')
.then(()=>{
    console.log("db connected");
})
.catch((err)=>{

    console.log(err.message);
})

app.use(cors({origin:['http://localhost:5173']}));
app.get('/',(req,res)=>{
  res.json("hello");
})

app.use(userroute);
app.listen(8081,()=>{
    console.log("server connected");
})