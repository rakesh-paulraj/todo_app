import {useState} from "react"

export function CreateTodo(props){
const {title,Settitle}=useState([]);
const {description,Setdescription}=useState([]);

return<div>
      <input type="text" placeholder="title"  onChange={function(e){
        Settitle(e.target.value);
      }} ></input>
      <input type="text" placeholder="description" onChange={function(e){
        Setdescription(e.target.value);
      }}
         ></input>
      <button onClick={() => {
            // axios
            fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "Content-type": "application/json"
                }
            })
                .then(async function(res) {
                    const json = await res.json();
                    alert("Todo added");
                })
        }}>Add a todo</button>
</div>


}