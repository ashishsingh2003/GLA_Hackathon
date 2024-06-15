const mongoose=require('mongoose');

const memoryschema =new mongoose.Schema({
    
    img:{
        type:String,
        required:true
    },
    text:{
        type:String,
        required:true
    },
   
    
})
const Memory=mongoose.model('Memory',memoryschema);
module.exports=Memory;