// 登录验证

const http = require('http');
const querystring = require('querystring');
const url = require('url');
const ss = require('./05.js');

http.createServer((req,res)=>{
    //静态资源
    if(req.url.startsWith('/view')){
       ss.qwq(req,res,__dirname);
    }
    //动态
    if(req.url.startsWith('/login')){
        // 解决中文乱码
        res.writeHead(200,{
            'Content-Type':'text/plain;charset=utf8'
        });

        // GET请求 
        if(req.method=='GET'){
           let pget = url.parse(req.url,true).query;
           if(pget.username=='admin'&&pget.userpwd=='123'){
               res.end('登录成功qaq');
           }else {
            res.end('登录失败qaq');
           }

        }
        // POST请求
        if(req.method=='POST'){
            let pdata='';
            req.on('data',(chunk)=>{
                pdata +=chunk;
            });
            req.on('end',()=>{
                let obj = querystring.parse(pdata);
                if(obj.username=='admin' && obj.userpwd=='123'){
                    res.end('登录成功qwq');
                }else {
                    res.end('登录失败qwq');
                }
            });
        }
    }
}).listen(3000,()=>{
    console.log('服务器连接成功');
});