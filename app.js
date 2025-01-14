const express=require('express');
const app=express();
const morgan=require('morgan');
const mongoose=require('mongoose');
const productrouter=require('./api/v1/Routes/product');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded());



const mongoConnstr=`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@ecom.tqsoa.mongodb.net/WebApi2025`;

mongoose.connect(mongoConnstr).then(()=>{
    console.log('COnnected To Mongo');
});

app.use('/product',productrouter);
app.all('*',(req,res)=>{
    return res.status(404).json({MSG:"not found 404"});
});
module.exports=app;