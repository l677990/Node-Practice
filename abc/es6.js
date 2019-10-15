
    // let qwq = "ES6语法";
    // console.log(qwq);
    // if(true) {
    //     let qwq = "ES6语法";
    //     console.log(qwq);
    // }
    // const qwq=1;
    // console.log(qwq);
// let {foo:abc='hellow',bar}={bar:'hehe'};
// console.log(abc,bar);
// console.log('hellow word'.includes('word',7));


// function cool(name='lisi',age=11){
//     console.log(name,age);
// }
// cool('zhangsan',14);

// function foo(qwq=13){
//     console.log(qwq);
// }
// foo(16);

// function foo(a,b,c,d){
//     console.log(a+b+c+d);
// }
// var ayy=[1,2,3,4];
// foo(...ayy);

//  let arr=[123,456,789];
// //  arr.forEach(function(element,index){
// //     console.log(element,index);
// //  });
// arr.forEach((element,index)=>{
//     console.log(element,index);
// });

// function foo(){
//     setTimeout(() => {
//         console.log(this.num); 
//     }, 100);
// }
// foo.call({num:1});
// setTimeout(function(){
//     console.log(1);
// },100);

// function foo(...param){
//     console.log(param);
// }
// foo(123,456);

let foo = (...param) => {
    console.log(param);
}
foo(111,222);