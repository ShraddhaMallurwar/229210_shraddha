const express=require('express');
const app=express();

app.get('/',(req,resp)=>{
    resp.sendFile('public/index.html',{root:__dirname});
})

app.listen(8081,function(){
    console.log('server started at port no : 8081');
})