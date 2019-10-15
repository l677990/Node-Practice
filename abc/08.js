/*
    大文件流式操作
    fs.createReadStream(path[, options])
    fs.createWriteStream(path[, options])

    pipe的作用直接把输入流和输出流
*/

const path = require('path');
const fs = require('fs');

let spath = path.join(__dirname,'../zip','file.zip');
let dpath = path.join('C:\\Users\\李明珂\\Desktop','file.zip');

// let ReadStream = fs.createReadStream(spath);
// let WriteStream = fs.createWriteStream(dpath);

// let num =1;

// ReadStream.on('data',(chunk)=>{
//     num++;
//     WriteStream.write(chunk);
// });
// ReadStream.on('end',()=>{
//     console.log("执行了"+num+"次");
// });

fs.createReadStream(spath).pipe(fs.createWriteStream(dpath));
