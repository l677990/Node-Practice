/*
路由模块
*/
const express = require('express');
const router = express.Router();
//引入路由的路径
const service = require('./service.js');

//路由处理，引用showIndex方法
//渲染主页
router.get('/',service.showIndex);
//添加图书(跳转到添加图书的页面)
router.get('/toAddBook',service.toAddBook);
//添加图书(提交表单)
router.post('/addBook',service.addBook);
//跳转到编辑图书页面
router.get('/toEditBook',service.toEditBook);
//编辑图书提交表单
router.post('/editBook',service.editBook);
module.exports = router;