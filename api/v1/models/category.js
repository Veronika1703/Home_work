const mongoose=require('mongoose');//mongoose connection
const categorySchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId, 
    Cname:String,
    Cdesc:String,
    cid:Number,
});
const model=mongoose.model('categorys',categorySchema);//
module.exports=model;
