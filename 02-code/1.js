/*
    动态网站开发

    实现成绩查询功能
*/

const http=require('http');
const path=require('path');
const fs=require('fs');
const querystring=require('querystring');
const scoreData=require('./scores.json');
const template = require('art-template');
http.createServer((req,res)=>{
    //查询成绩的入口地址 路径 /query
    //路由(请求路径+请求方式)
    if(req.url.startsWith('/query') && req.method=='GET'){
          //返回内容之前要进行数据渲染
          let content=template(path.join(__dirname,'view','index.art'),{});
          res.end(content);
    }else if(req.url.startsWith('/score')&&req.method=='POST'){
           //获取成绩的结果 /score
           let pdata = '';
           req.on('data',(chunk)=>{
               pdata += chunk;
           });
           req.on('end',()=>{
               let obj=querystring.parse(pdata);
               let result = scoreData[obj.code];
                //返回内容之前要进行数据渲染
                let content=template(path.join(__dirname,'view','result.art'),result);
                res.end(content);
           });
    }
}).listen(3000,()=>{
    console.log('reading....');
});