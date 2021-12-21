import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
    let titleStyle={
        fontSize:"25px",
        color:"orange",  
        paddingTop:"20px",
        margin:"10px auto"
    }
    let descStyle ={
        fontSize:"20px",
        color:"dark gray",
        margin:"10px auto"
    }
    let buttonStyle ={
        fontSize:"20px",
        margin:"10px auto"
    }
    return (
        <>
        <div>
           <h4 style={titleStyle}>{todo.title}</h4>
           <p style={descStyle}>{todo.desc}</p>
           <button className="btn btn-sm btn-danger" style={buttonStyle} onClick={()=>{onDelete(todo)}}>Delete</button> 
        </div>
        </>
    )
}
