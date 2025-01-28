const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    username:String,
    pass:String,
    fullName:String
});

module.exports=mongoose.model('users',userSchema);