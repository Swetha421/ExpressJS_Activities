const express=require('express')
const app=express();


app.get('/welcome/:id',(req,res)=>{
    const id=req.params.id;
    res.send(`welcome,user ${id}`)
});

app.listen(3002,()=>{
    console.log(`user welcome app listening at 3002`)
});