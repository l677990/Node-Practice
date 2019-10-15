//原生js
//(1)
function content(){
	console.log('one for all');
}
content();

//(2)===========================
function foov(v){
	return v;
}


//ES6箭头函数
let content = ()=>console.log('all for one');

//(2)===========================
let foo = v => v;
let ret = foo(111);
console.log(ret);