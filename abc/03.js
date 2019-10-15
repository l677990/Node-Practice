/*
模块化开发

传统非模块化开发有如下缺点：
1、命名冲突
2、文件依赖

*/

var sum = function(a,b){
    return parseInt(a)+parseInt(b);
}
//导出模块成员
exports.sum=sum;

//导出成员的另一种方式
module.exports=sum;