/*
    中间件的挂载方式
    use
    路由方式
*/

const app = require('express')();

// app.get('/adc',(req,res,next)=>{
//     console.log(1);
//     next();
// });
// app.get('/adc',(req,res,next)=>{
//     console.log(2);
//     next();
// });
// app.get('/adc',(req,res)=>{
//     console.log(3);
//     res.send(232312);
// });
//------------------------------------
app.get('/adc',(req,res,next)=>{
    console.log(1);
    next();
},(req,res,next)=>{
    console.log(2);
    next();
},(req,res)=>{
    console.log(2);
    res.send('qwqwqwq');
});

app.listen(3000,()=>{
    console.log('okokok');
});

