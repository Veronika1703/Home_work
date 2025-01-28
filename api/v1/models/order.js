const mongoose=require('mongoose');//mongoose connection
const orderSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId, 
    Pname:String,
    Pprice:Number,
    Pdesc:String,
    picName:String,
    cid:Number,
    pid:Number
});
const model=mongoose.model('order',orderSchema);//
module.exports=model;
