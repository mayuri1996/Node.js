express= require("express")
obj = express()

obj.get("/",function(req,res){
    console.log("Server is started");
})
obj.listen(8080)

obj.get("/deposit",function(req,res){
    console.log("inside depositor");
})