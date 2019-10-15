/*
    读文件操作
*/
const fs = require('fs');
const path = require('path');
// 异步请求
let qwq = path.join(__dirname,'data.txt');
// fs.readFile(qwq,(err,data)=>{
//     if(err) return;
//     console.log(data.toString());
// });

//同步请求
let qaq=fs.readFileSync(qwq,'utf8');
// console.log(qaq.toString());
console.log(qaq)