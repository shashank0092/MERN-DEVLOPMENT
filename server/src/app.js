const express=require('express');

const app=express();
app.use(require('./router'))
require('./conn')
const RegisterModel=require('./Model');

app.get('/',async(req,res)=>{ 
    res.send(`<h1>THIS IS SHUKLA BOI</h1>`)
})


app.listen(5000,()=>{
    console.log('Running On Port NO 5000')
})