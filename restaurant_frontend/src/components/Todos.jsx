import React from 'react'
import Todo from './Todo'

const Todos = (props) => {
    // console.log(props)
    const handleRemoveTodo = (id) => {
        props.onRemoveTodo(
            id
        )
    }
    return (
        <div>
            {
                props.todos.map((todo, index) => {
                    return <Todo key={index} todo={todo.todo} id={todo.id} onRemoveTodo={handleRemoveTodo}/>
                }
                )
            }
        </div>
    )
}

export default Todos