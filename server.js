require
const http=require('http');
const app=require('./app');
const port=process.env.PORT||5050;
const app=require('./app');
const srv=http.createServer(app);

srv.listen(port,()=>{
    console.log("Server UP");
});