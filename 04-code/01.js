const express = require('express');
const app = express();

let total = 0;
app.use('/abc',(req,res,next)=>{
    console.log(1);
    next();
})

app.use('/abc',(req,res,next)=>{
    console.log(2);
    next();
})

app.use('/abc',(req,res)=>{
    console.log(3);
    total++;
    console.log(total);
    res.send('12313');
})

app.listen(3000,()=>{
    console.log('okok');
})