import React from 'react'
import { useState } from 'react'

const NewTodo = (props) => {
    const [todo, setTodo] = useState("")

    const onHandleTodo = props.onHandleTodo

    const handleSubmit = (e) => {
        e.preventDefault()
        onHandleTodo(
            todo
        )
        setTodo("")
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="todo">New Todo: </label>
            <input type="text" name="todo" value={todo} onChange={(e) => setTodo(e.target.value)}/>
            <button type="submit">Add Todo</button>
        </form>

    )
}

export default NewTodo