/*
    修改文件内容
    fs.writeFile(file, data[, options], callback)
*/
const fs = require('fs');
const path = require('path');

let dpath = path.join(__dirname,'data.txt');
// 异步操作
// fs.writeFile(dpath,'hellow lmk~~','utf8',(err)=>{
//     if(!err){
//         console.log('修改成功');
//     }
// });



// 同步操作
fs.writeFileSync(dpath,'hellow lmk~~');