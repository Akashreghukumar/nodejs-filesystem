const express=require('express')
const app=express()
const fs=require('fs')
// const createfile=require('./createfile')

var date=new Date()
var fname=date.getTime();
console.log(fname)
// createfile

app.get('/',(req,res)=>{
    res.send("dashboard")
})


app.post('/post',(req,res)=>{
    fs.writeFile(`${fname}.txt`, `${fname}`, function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
        res.send("file created")
      });
})

const port=3001 || process.env.port
app.listen(port,()=>
{
    console.log("listening 3000")
}
)
