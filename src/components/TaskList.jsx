import React from 'react'



export function TaskList({tasks}) {
    return (
        <ul>
            {
                tasks.map((task) =><li>tarea {task.label}</li>)
            }
        </ul>
    )
}
