/*
    目录操作
    1.创建目录
    fs.mkdir(path[, options], callback)  异步
    fs.mkdirSync(path[, options])        同步

    2.读取目录
    fs.readdir(path[, options], callback) 异步
    fs.readdirSync(path[, options])       同步

    3.删除目录
    fs.rmdir(path, callback)
    fs.rmdirSync(path)
*/
const path = require('path');
const fs = require('fs');
// 异步
// fs.mkdir(path.join(__dirname,'abc'),(err)=>{
//     console.log(err);
// });

// 同步
// fs.mkdirSync(path.join(__dirname,'qwq'));

// 2.读取文件
// fs.readdir(path.join(__dirname),(err,files)=>{
//     // console.log(files);
//     // 判断是文件还是文件夹
//     files.forEach((item,index)=>{
//         fs.stat(path.join(__dirname,item),(err,stat)=>{
//             if(stat.isFile()){
//                 console.log(item,'文件');
//             }else if(stat.isDirectory()){
//                 console.log(item,'目录');
//             }
//         });
//     });
// });

// 同步
// let files = fs.readdirSync(path.join(__dirname));
// files.forEach((item,index)=>{
// fs.stat(path.join(__dirname,item),(err,stat)=>{
//         if(stat.isFile()){
//             console.log(item,'文件');
//         }else if(stat.isDirectory()){
//             console.log(item,'目录');
//         }
//     });
// });

// 3.删除文件
// 异步
// fs.rmdir(path.join(__dirname,'abc'),(err)=>{
//     console.log(err);
//     console.log('删除成功！');
// });

// 同步
// let qwq= fs.rmdirSync(path.join(__dirname,'qwq'));


