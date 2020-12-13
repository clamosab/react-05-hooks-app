import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({todos, handleToggle, handleDelete}) => {
    return (
        <ul className="list-group list-group-flush">
            {
                todos.map( (todo, i) => (
                    <TodoListItem 
                        key={todo.id}
                        todo={todo} 
                        i={i} 
                        handleToggle={handleToggle} 
                        handleDelete={handleDelete}/>
                ))
            }
        </ul>
    )
}
