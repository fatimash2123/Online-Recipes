const express=require("express")
const app=express();
app.use(express.json())

const mongoose=require("mongoose")

//connection to mongodb
mongoose.set('strictQuery',false)
mongoose.connect("mongodb://0.0.0.0:27017/ReactAssign")
.then((res)=>{if(res){console.log("Connection to DB successfully made")} else{console.log("Connection to DB failed")}})
.catch(err=>{console.log("Connection to DB failed")})

app.use(require("./app_server/routes/recipeRoute"))

app.listen(3000,(err)=>{
    if(err){
        console.log("Server failed")
    }
    else{
        console.log("Server listening at 3000")
    }
})