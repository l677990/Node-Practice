/*

*/
const app = require('express')();

app.use((req,res)=>{
  res.sendu('okokok');
});

// app.get('/',(req,res)=>{
//     res.send('get ok');
// })

// app.post('/',(req,res)=>{
//     res.send('post ok');
// })

// app.put('/',(req,res)=>{
//     res.send('put ok');
// })

// app.delete('/',(req,res)=>{
//     res.send('delete ok');
// })

app.listen(3000,()=>{
    console.log('okokok');
})