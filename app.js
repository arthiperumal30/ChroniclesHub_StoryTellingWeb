
const express = require("express")
const app = express();
const path = require("path")
const collection=require("./mongo")
const tempelatePath = path.join(__dirname,"./tempelates")

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.set('view engine',"hbs")
app.set("views",tempelatePath)

app.get("/",(req,res)=>{
    res.render("home")
})

app.post('/sendMsg',async(req,res)=>{
    const msg=req.body.msg
    await collection.insertMany([{msg}])
    res.send("SENT TO DATABASE!!")
})
app.listen(3000,()=>{
    console.log("Port Connected")
})