/*
文件操作
*/
const fs = require('fs');
// 异步
// fs.stat('./qwq.js',(err,stat) =>{
//     if(err) return;
//     if(stat.isFile()){
//         console.log('文件');
//     }else if(stat.isDirectory){
//         console.log('目录');
//     }
//     console.log(stat);
//     console.log(1);
// });
console.log("准备打开文件！");
fs.stat('data.txt', function (err, stats) {
   if (err) {
       return console.error(err);
   }
   console.log(stats);
   console.log("读取文件信息成功！");
   
   // 检测文件类型
   console.log("是否为文件(isFile) ? " + stats.isFile());
   console.log("是否为目录(isDirectory) ? " + stats.isDirectory());    
});

//同步
// console.log(1);
// let me = fs.statSync('./data.txt');
// console.log(me);
// console.log(2);