/*
get 方式请求

*/

const path = require('path');
const http = require('http');
const url = require('url');

let res = 'http://www.baidu.com/?flag=123';
let qwq = url.parse(res,true);
console.log(qwq);


// let server = http.createServer((req,res)=>{
//     let obj = url.parse(req.url,true);
//     res.end(obj.query.username+'======='+obj.query.userwd);
// }).listen(3000,()=>{
//     console.log('服务器启动成功!');
// })

