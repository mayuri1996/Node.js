express= require("express")
obj = express()
const port = 8080;


obj.listen(port,function(){
    console.log("Server is started");
})

obj.get("/deposit",(req,res)=>{
    res.send("inside depositor");
})