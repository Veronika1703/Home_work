const express=require('express')
const app=express();
const morgan=require('morgan');

const productrouter=require('./API/V1/Routes');

app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded());

app.use('/product',productrouter);
app.all('*',(res,res)=>{
    return res.status(404).json({MSG:"not found 404"});
});
module.exports=app;