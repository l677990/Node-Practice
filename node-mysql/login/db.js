/*
    封装操作数据库的通用api
*/
const mysql=require('mysql');
exports.mysql = (sql,data,callback)=>{
//创建数据库连接
const connection = mysql.createConnection({
  host     : 'localhost',//数据库所在的服务器,ip或者域名或者ip地址
  user     : 'root',//登录数据库的账号
  password : 'root',//登录数据库的密码
  database : 'book'//数据库的名称
});
//执行连接操作
connection.connect();

//操作数据库
connection.query(sql,data/*查询表有几条数据*/, function (error, results, fields) {
  if (error) throw error;
  callback(results);
});
//关闭数据库
connection.end();
}