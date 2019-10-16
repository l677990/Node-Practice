/*
    参数处理
*/
const express = require('express');
const app = express();
const bodyParser = require('body-parser')

//挂载参数处理中间件
app.use(express.static('public'));

//挂载参数处理中间件(post)
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/login',(req,res)=>{
    let data = req.query;
    console.log(data);
    res.send('get ok');
});
app.post('/login',(req,res)=>{
    let data = req.body;
    console.log(data);
    if(data.username=='admin'&&data.password=='123'){
        res.send('ok');
    }else {
        res.send('no');
    }
    res.send('login ok');
});

app.listen(3000,()=>{
    console.log('okokokokok');
});