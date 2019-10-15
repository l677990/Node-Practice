// console.log('qwq');

// function sum(e){
//     var q = 0;
//     for(var i=0;i<e;i++){
//         q+=i;
//     }
//     return q;
// }
// var num = sum(100);
// console.log(num);

var template = require('art-template');
var html = template(__dirname + '/tpl-user.art', {
    user: {
        name: '赵毅nmsl'
    }
});
console.log(html);