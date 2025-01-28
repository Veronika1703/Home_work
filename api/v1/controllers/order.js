const orderModel=require('../models/order');
module.exports={

GetAll:(req,res)=>{
        try{
            orderModel.find().then((order)=>{
                return res.status(200).json(order);
            });  
        }
        catch
        {
           return res.status(500).json({msg:"500 Server Error"});
        }
  
},
GetById:(req,res)=>{
    try{
        orderModel.find({pid:req.params.id}).then((order)=>{
            return res.status(200).json(order);
        });
    }
    catch
    {
       return res.status(500).json({msg:"500 Server Error"});
    }
},
AddNew: (req, res) => {
    try{
        orderModel.insertMany([req.body]).then((data)=>{
            return res.status(200).json(data)
        });
    }
    catch{
        return res.status(500).json({msg : "500 server error"});
    }

},
Update:(req,res) => {
    try{
        orderModel.updateOne({pid:req.params.id},req.body).then((data) =>{
            return res.status(200).json(data);
        });
    }
    catch{
        return res.status(500).json({msg : "500 server error"});
    }
},
Delete:(req,res)=>{
    try{
        orderModel.deleteOne({pid:req.params.id}).then((data)=>{
        return res.status(200).json(data);
    
    });
    }
    catch
    {
       return res.status(500).json({msg:"500 Server Error"});
    }
}
};