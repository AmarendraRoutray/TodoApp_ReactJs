import React, {useState} from 'react'
import TodoForm from './TodoForm'
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

function Todo({todos, completeTodo, removeTodo, updateTodo}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id){
        return <TodoForm edit={edit} submitUpdate={submitUpdate}/>
    }

    return todos.map((todo, index) =>(
        <div
            className={todo.isComplete ? 'todo-row-complete' : 'todo-row'}
            key={index}
        >
            <div >
                <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                    {todo.text}
                </div>
            </div>


            
            <div className="icons">
            <RiCloseCircleLine 
                onClick={() => removeTodo(todo.id)}
                className='remove-icon'
            />
            <TiEdit 
                onClick={() => setEdit({id: todo.id, value: todo.text})}
                className='edit-todo'
            />
            </div>
        </div>
    ))
}

export default Todo

// Math.floor(Math.random() * 10000)
// !todo.text || /^\s*$/.test(todo.text)