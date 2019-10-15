// let buf = Buffer.from('tom');
// let buf2 = Buffer.from('json');
// let buf3 = Buffer.concat([buf,buf2]);
// // console.log(Buffer.byteLength(buf3));
// console.log(buf3.toString());

//.write方法
// let buf = Buffer.alloc(6);
// buf.write('abcdef',2,2);
// console.log(buf);

// Slice() toString()方法
// let buf = Buffer.from('abcde');
// let buf1=buf.slice(2,3);
// console.log(buf1.toString());

// toJson方法
// const buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
// const json = JSON.stringify(buf);
// console.log(json);
const path = require('path');
let obj = path.parse(__dirname);
console.log(obj);

console.log(path.isAbsolute('/foo/bar'));
console.log(path.isAbsolute('C:/foo/..'));
console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..','../'));