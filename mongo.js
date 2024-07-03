const mongoose=require('mongoose');

mongoose.connect("mongodb://0.0.0.0:27017/text_editor")
.then(()=>{
    console.log("mongodb connected")
})
.catch(()=>{
    console.log("Failed")
});

const schema=new mongoose.Schema({
    msg:
    {
         type:String,
         required:true
    }
});

const collection=new mongoose.model("storyCollection",schema);

module.exports=collection;