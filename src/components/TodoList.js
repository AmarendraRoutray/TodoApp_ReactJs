import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

function TodoList() {
    const [todos, setTodos] = useState("");

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return ;
        }

        const newTodo = [...todos, todo]

        setTodos(newTodo)
        // console.log(todo)
        console.log(newTodo)
        console.log(todo,...todos)
    }

    const updateTodo = (todoId, newVaue) => {
        if(!newVaue.text || /^\s*$/.test(newVaue.text)) {
            return ;
        }

        setTodos(prev => prev.map(item => (item.id === todoId? newVaue : item)))
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArr)
    }

    const completeTodo = id => {
        let updtaedTodos = todos.map(todo => {
            if(todo.id === id){
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updtaedTodos)
    }
    
    return (
        <div>
            <h1>Plans for Today</h1>
            <TodoForm onSubmit={addTodo}/>
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
        </div>
    )
}

export default TodoList
