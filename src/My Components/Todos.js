import React from 'react'
import {TodoItem} from "./TodoItem";

export const Todos = (props) => {
    let myStyle={
        fontSize:"30px",
        color:"green",
        margin:"10px auto"
       
    }
    let myStyle1={
        fontSize:"25px",
        margin:"70px auto"
    }
    return (
        <div className="container">
            <h3 className="my-2" style={myStyle}>Todos List</h3>
            {
            props.todos.length == 0? "No Todos to display" :
            props.todos.map((todo)=>{
                return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} style={myStyle1}/>   
            })
            }
        </div>
    )
}
