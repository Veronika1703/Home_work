require('dotenv').config();
const http=require('http');
const app=require('./app');
const port=process.env.PORT||5050;
srv=http.createServer(app);

srv.listen(port,()=>{
    console.log("Server UP");
});