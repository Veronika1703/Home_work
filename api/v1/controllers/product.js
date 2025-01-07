module.exports={
GetAll:(req,res)=>{
        try{
            return res.status(200).json({msg:"All Products"});
    
        }
        catch
        {
           return res.status(500).json({msg:"500 Server Error"});
        }
  
},
GetById:(req,res)=>{
    try{
        return res.status(200).json({msg:`Get Product Id ${req.params.id}`});

    }
    catch
    {
       return res.status(500).json({msg:"500 Server Error"});
    }
},
AddNew:(req,res)=>{
    try{
        return res.status(200).json({msg:"Add New Product",body:req.body});

    }
    catch
    {
       return res.status(500).json({msg:"500 Server Error"});
    }
},
Update:(req,res)=>{
    try{
        return res.status(200).json({msg:`Update Product${req.params.id}`});
    

    }
    catch
    {
       return res.status(500).json({msg:"500 Server Error"});
    }
},
Delete:(req,res)=>{
    try{
        return res.status(200).json({msg:`Delete Product${req.params.id}`});
    

    }
    catch
    {
       return res.status(500).json({msg:"500 Server Error"});
    }
}