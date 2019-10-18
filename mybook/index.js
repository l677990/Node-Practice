/*
 图书馆里系统-入口文件
*/
const express = require('express');
//创建路由
const router = require('./router.js');
const template = require('art-template');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

//启动静态资源服务 www虚拟路径 访问也要输入www
app.use('/www',express.static('public'));

//指定模板路径
app.set('views',path.join(__dirname,'views'))
//设置模板引擎
app.set('view engine', 'art')
//让express兼容art-template模板引擎
app.engine('art', require('express-art-template'));

//处理请求参数
// 挂载中间件post
app.use(bodyParser.urlencoded({extended:false}));
//处理json格式的参数
app.use(bodyParser.json());

//启动服务器
//1.配置路由，引用
app.use(router);
//2.监听端口
app.listen(3000,()=>{
    console.log('running...');
});