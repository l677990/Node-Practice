// const express = require('express');
// const app = express();
const app = require('express')();

app.get('/',(req,res)=>{
    res.send('hellow 国服第一帅 lmk');
}).listen(3000,()=>{
    console.log('gogogo');
})

//---------------
// let peach = app.get('/',(req,res)=>{
//     res.send('ok');
// });
// peach.listen(3000,()=>{
//     console.log('gogogo');
// });