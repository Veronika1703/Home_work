const router=require('express').Router();
const {}=require('../controlles/product');


router.get('/',async(req,res)=>{
    try{
        return res.status(200).json({msg:"All Products"});

    }
    catch
    {
       return res.status(500).json({msg:"500 Server Error"});
    }
});
router.get('/:id',(req,res)=>{
    try{
        return res.status(200).json({msg:`Get Product Id ${req.params.id}`});

    }
    catch
    {
       return res.status(500).json({msg:"500 Server Error"});
    }
});
router.post('/',(req,res)=>{
    try{
        return res.status(200).json({msg:"Add New Product",body:req.body});

    }
    catch
    {
       return res.status(500).json({msg:"500 Server Error"});
    }
});
router.put('/:id',(req,res)=>{
    try{
        return res.status(200).json({msg:`Update Product${req.params.id}`});
    

    }
    catch
    {
       return res.status(500).json({msg:"500 Server Error"});
    }
});
router.delete('/:id',(req,res)=>{
    try{
        return res.status(200).json({msg:`Delete Product${req.params.id}`});
    

    }
    catch
    {
       return res.status(500).json({msg:"500 Server Error"});
    }
});

module.exports=router;