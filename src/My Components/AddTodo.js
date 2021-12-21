import React, {useState} from 'react';

export const AddTodo = ({addTodo}) => {
    let myStyle ={
       paddingLeft: "150px",
       paddingTop: "50px"
    }
    let formStyle = {
        width:"80%"
    }

    const[title, setTitle] = useState("");
    const[desc, setDesc] = useState("");

    const submit = (e) =>{
     e.preventDefault();
     if(!title || !desc){
         alert("Title or Description cannot be blank")
     }   
     else{
     addTodo(title,desc);
    setTitle("");
    setDesc("");
    }
    }
    return (
        <div className="container my-3" style={myStyle}>
          <h3>Add A Todo</h3>
            <form onSubmit ={submit}>
                <div className="form-group">
                    <label htmlFor="title">Todo Title</label>
                    <input type="text" value={title} onChange={(e) =>{setTitle(e.target.value)}} className="form-control" id="title" style={formStyle}/>
                </div>
                <div className="form-group">
                    <label htmlFor="desc">Todo description</label>
                    <input type="desc" value={desc} onChange={(e) =>{setDesc(e.target.value)}}  className="form-control" id="desc" style={formStyle}/>
                </div>
                <br/>
                 <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    )
}
