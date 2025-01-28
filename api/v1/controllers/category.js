const categoryModel=require('../models/category');
module.exports={

GetAll:(req,res)=>{
        try{
            categoryModel.find().then((category)=>{
                return res.status(200).json(category);
            });  
        }
        catch
        {
           return res.status(500).json({msg:"500 Server Error"});
        }
  
},
GetById:(req,res)=>{
    try{
        categoryModel.find({pid:req.params.id}).then((category)=>{
            return res.status(200).json(category);
        });
    }
    catch
    {
       return res.status(500).json({msg:"500 Server Error"});
    }
},
AddNew: (req, res) => {
    try{
        categoryModel.insertMany([req.body]).then((data)=>{
            return res.status(200).json(data)
        });
    }
    catch{
        return res.status(500).json({msg : "500 server error"});
    }

},
Update:(req,res) => {
    try{
        categoryModel.updateOne({pid:req.params.id},req.body).then((data) =>{
            return res.status(200).json(data);
        });
    }
    catch{
        return res.status(500).json({msg : "500 server error"});
    }
},
Delete:(req,res)=>{
    try{
        categoryModel.deleteOne({pid:req.params.id}).then((data)=>{
        return res.status(200).json(data);
    
    });
    }
    catch
    {
       return res.status(500).json({msg:"500 Server Error"});
    }
}
};