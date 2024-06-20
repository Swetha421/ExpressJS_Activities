const express=require ('express');
const bodyParser=require('body-parser')

const app=express()
const port=3001;


app.use(bodyParser.json())

app.post('/submit',(req,res)=>{
    const {title,content}=req.body;

    if(!title||!content){
        return res.status(400).json({message:'Title and content are required'});
    }
    else{
        return res.status(201).json({message:'submitted Successfully',review:{title,content}});
    }
});

app.listen(port,()=>{
    console.log("book review app listening at :",+ port)
})