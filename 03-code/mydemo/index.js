// 模板引擎

var template = require('art-template');
// var html = template(__dirname + '/mytemp.art', {
//     user: {
//         name: 'aui'
//     }
// });
// console.log(html);

// let tp = '<ul>{{each list as value}}<li>{{value}}</li>{{/each}}</ul>'
// let render = template.compile(tp);
// let ret = render({
//     list:['apple','bigapple','smallapple']
// });
// console.log(ret);
//--------------------------------

// // let tp = '<ul>{{each list as value}}<li>{{value}}</li>{{/each}}</ul>'
// let tp = '<ul>{{each list}}<li>[{{$index}}]{{$value}}</li>{{/each}}</ul>'
// let render = template.render(tp,{
//     list:['apple','bigapple','smallapple']
// })
// console.log(render);
//-----------------------------------
var html = template(__dirname + '/score.art', {
    chinese:'120',
    math:'120',
    english:'120',
    summary:'120'
});
console.log(html);