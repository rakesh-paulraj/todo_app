const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://admin:fQ8qLRJqWtSwH33G@cluster0.mmielod.mongodb.net/todoapp")
 

const todoschema=mongoose.Schema({
 title:String,
 description:String,
 completed:Boolean 
})



const todo=mongoose.model('todo',todoschema);
 

module.exports={
    todo
}