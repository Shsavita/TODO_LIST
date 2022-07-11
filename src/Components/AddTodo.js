import React, { useState } from 'react';

export const AddTodo = ({addTodo}) => {
    const [title, setTitle]=useState("");
    const [desc, setdesc]=useState("");

    const submit= (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description can't be blank");
        }
        addTodo(title,desc);
    }
    return (
        <div className='container' my-3>
            <h3>Add New Task
            </h3>

            <form onSubmit={submit} >
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Task Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}
                    className="form-control" id="title" aria-describedby="emailHelp" />
                     
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Task Description</label>
                    <input type="text"  value={desc} onChange={(e)=>{setdesc(e.target.value)}}
                     className="form-control" id="desc" />
                </div>
            
                <button type="submit" className="btn btn-sm btn-success">Submit</button>
            </form>
        </div>
    )
}

 
