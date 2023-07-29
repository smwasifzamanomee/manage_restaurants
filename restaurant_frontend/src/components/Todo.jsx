import React from 'react'

const Todo = (props) => {
    const id = props.id
    
    const handleDelete = (id) => {
        props.onRemoveTodo(
            id
        )
    }

    return (
        <div className='flex gap-4 border bg-green-500 justify-between items-center w-[40%]'>
            <div>
                <h1>{id}</h1>
                <h1>{props.todo}</h1>
            </div>
            <div>
                <button
                    className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
                    onClick={() => handleDelete(id)}
                >delete
                </button>
            </div>
        </div>
    )
}

export default Todo