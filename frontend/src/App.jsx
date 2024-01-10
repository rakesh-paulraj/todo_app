import React from "react";
import { useState } from "react"
import { CreateTodo } from "./components/Createtodo";
import {Todo} from "/components/Todos.jsx"  

function App(){
const [todos,SetTodos]=useState([]);

fetch("http://localhost:3000/todos")
.then(async function (res){
  const json= await res.json();
  SetTodos(json.todos);

})

return(
<div> 
  <CreateTodo></CreateTodo>
  <Todo todos={todos}></Todo>
</div>)
}
export default App
