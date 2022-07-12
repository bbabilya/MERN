import React, { useState } from 'react';

const ToDo = (props) => {
    const [singleToDo, setSingleToDo] = useState("");
    //single toDo
    const [toDos, setToDos] = useState([]);
    //all toDos
    const [completed, setCompleted] = useState(false);


    const oneWholeToDo = (newToDo) => setToDos([...toDos, newToDo]);
    //one whole toDo boi = a new toDo bruh = add to list of toDos.

    const updateList = (updatedList) => setToDos(updatedList);

    const entry  = {
        content: singleToDo,
        completed: completed
    }

    const toDoSubmit = (e) => {
        e.preventDefault();
        oneWholeToDo(entry);
        console.log(entry);

    }

    const strike = {
        textDecoration: 'line-through'
    }

    const setChecked = (e, id) => {
        const newTodos = [...toDos];
        newTodos[id].completed = e.target.checked;
        updateList(newTodos);
    }

    const handleDelete = (e, i) => {
        const newTodos = [...toDos];
        newTodos.splice(i, 1);
        updateList(newTodos);
    }


    return(
        <div className="container">
            <div>
                <h1> Hello</h1>
                <form onSubmit= { toDoSubmit }>
                    <p><label>Whatchu gotta do? </label></p>
                    <div className="input_container d-flex w-25 mx-auto">
                        <input type="text" class="form-control mx-auto" value ={singleToDo} onChange={(e) => setSingleToDo(e.target.value)} />
                        <button type="submit" class="btn btn-primary m-2">Submit</button>
                    </div>
                </form>
            </div>
            <div>
                {toDos.map((item, i) => {
                        return(
                            <div key={i}>
                                <ul className = "list-group w-25 mx-auto">
                                    <li className="list-group-item">
                                        { item.completed ? <p style={strike}>{item.content}</p> : <p>{item.content}</p> }
                                        <input checked={item.completed} type="checkbox" onChange={(e) => setChecked(e, i)}/>
                                        <button class=" btn btn-primary ms-2" onClick={(e) => handleDelete(e,i)}>Delete</button>
                                    </li>
                                </ul>
                            </div>
                        );
                    })}
            </div>
        </div>

    )
}


export default ToDo;