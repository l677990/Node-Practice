/*
post参数处理
*/

const http = require('http');
const querystring=require('querystring');

// let qwq='username=lmk&userpwd=12345';
// let ooo=querystring.parse(qwq);
// console.log(ooo);

http.createServer((req,res)=>{
    if(req.url.startsWith('/login')){
        let pdata='';
        req.on('data',(chunk)=>{
            pdata +=chunk;
        })
        req.on('end',()=>{
            console.log(pdata);
            let obj =querystring.parse(pdata);
            res.end(obj.username+'========='+obj.userpwd);
        });
    }
}).listen(3000,()=>{
    console.log('服务器启动成功');
})