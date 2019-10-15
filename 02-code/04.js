/* 

响应文件

*/


const http=require('http');
const path=require('path');
const fs=require('fs');
const mime=require('./package.json');

http.createServer((req,res)=>{
	fs.readFile(path.join(__dirname,'www',req.url),'utf8',(err,fileContent)=>{
		if(err){
			res.writeHead(404,{
				'Content-Type':'text/plain;charset=utf8'
			});
			res.end('页面被狗狗叼走了');
		}else{
			let dtype='text/html';
			//获取请求文件的后缀
			let ext = path.extname(req.url);
			//如果请求的文件的后缀合理，就获取到标准的响应格式
			if(mime[ext]){
				dtype=mime[ext];
			}
			//如果响应的内容是文本，就设置成utf8
			if(dtype.startsWith('text')){
				dtype+=';charset=utf8'
			}
			//设置响应头信息
			res.writeHead(200,{
				'Content-Type':dtype
			});
			res.end(fileContent);
		}
	})
}).listen(3000,()=>{
	console.log('服务器连接成功');
});