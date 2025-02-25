import React, {useState} from 'react'
import TodoForm from './TodoForm'

function TodoList() {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }

        const newTodos = [...todos, todo]
        setTodos(newTodos)
    }

    return (
        <div>
            <h1>Today Plans</h1>
            <TodoForm addTodo={addTodo}/>
        </div>
    )
}

export default TodoList
