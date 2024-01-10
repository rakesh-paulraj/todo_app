const express=require ("express");
const { createtodo, updatetodo } = require("./types");
const app=express();
const { todo }= require("./db");
const cors=require("cors");

app.use(express.json());
app.use(cors());


app.post("/todo", async function(req,res){
const createpayload=req.body;
const parsedpayload=createtodo.safeParse(createpayload);
if(!parsedpayload.success){
    res.status(411).json({
        msg:"You sent the wrong inputs"
    })
   return;
}
await todo.create({
    title:createpayload.title,
    description:createpayload.description,
    completed:false
})

res.json({
    msg:"Todo created"
})
})

app.get("/todos", async function(req,res){
const todos= await todo.find({});
res.json({
    todos 
})
})

app.put("completed", async function(req,res){
const uploadpayload=req.body;
const parsepayload=updatetodo.safeParse(uploadpayload);
if(!parsepayload.success){
    res.status(411).json({
        msg:"You have sent the wrong inputs"
    })
    return;
}
await todo.update({
    _id:req.body.id},
    { completed:true })

    res.json({
        msg:"The todo is finished"
    })



})

app.listen(3000);