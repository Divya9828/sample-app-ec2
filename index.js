var exp=require('express')
var use=exp()

use.get('/home',(req,res)=>{
    res.json("Iam a Nodejs Developer")
})

use.listen(3000,()=>{
    console.log("running on port @ 3000")
})