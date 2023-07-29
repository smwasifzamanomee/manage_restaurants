import React from 'react'
import Todos from './Todos'
import NewTodo from './NewTodo'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

// const data = ['todo1', 'todo2', 'todo3']

const Home = () => {
    const [todo, setTodo] = useState([])
    console.log(todo)

    const handleTodo = (newtodo) => {
        setTodo(prevTodo => {
            return [...prevTodo, {id: uuidv4(), newtodo}]
        }
        )
    }

    const handleRemoveTodo = (id) => {
        setTodo(prevTodo => {
            return prevTodo.filter((todo) => todo.id !== id
            )
        }
        )
    }

    return (
        <div>
            <NewTodo onHandleTodo={handleTodo}/>
            <Todos todos={todo} onRemoveTodo={handleRemoveTodo}/>
        </div>
    )
}

export default Home