/*
托管静态文件
*/
const express = require('express');
const app = express();
//实现静态资源服务
// let lib = app.use('/abc',express.static('public'));
// app.use(express.static('hi'));

// lib.listen(3000,()=>{
//     console.log('ok');
// });

app.use('/abc',express.static('public'));
app.use(express.static('hi'));

app.listen(3000,()=>{
    console.log('ok');
});
