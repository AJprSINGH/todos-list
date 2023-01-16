import React, { useState } from 'react'

export const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description cannot be blank");
        }
        else{
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <div className='container my-3'>
            <h3 className="text-center my-3">
                Add a Todo
            </h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo detail</label>
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="tododet" aria-describedby="todohelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo description</label>
                    <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="tododesc"/>
                </div>
                <button type="submit" className="btn btn-sm btn-success">Submit</button>
            </form>

        </div>
    )
}

export default AddTodo
