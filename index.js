const express=require("express")
const app=express();
app.use(logger) 
app.get("/books",function(req,res){

    return res.send({
        route:"/books",
        role: req.role
    })
})
app.get("/libraries",function(req,res){

    return res.send({
        route:"/libraries",
        role: req.role
    })
})
app.get("/authors",function(req,res){

    return res.send({
        route:"/authors",
        role: req.role
    })
})

app.listen(3000,()=>{
    console.log(" r u there server")
})
function logger(req,res,next){
    console.log("before logger")
    next()
    console.log("after logger")
}
function check(str){
    return function check(req,res,next){
        if(req.path=="/libraries" && str=="librarian"){
            req.permission="true"

        }
        if(req.path=="/authors" && str=="authors"){
            req.permission="true"

        }
        next()
    }
}
