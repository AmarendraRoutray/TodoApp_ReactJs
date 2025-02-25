import React, {useState} from 'react'

function TodoForm( props ) {
    const [input, setInput] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })
        setInput('')
    }

    const handleChnage = (e) => {
        setInput(e.target.value)
    }

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder='Enter todo'
                value={input}
                name='text'
                className='todo-input'
                onChange={handleChnage}
            />
            <button className='add-button'>Add Todo</button>
        </form>
    )
}

export default TodoForm
