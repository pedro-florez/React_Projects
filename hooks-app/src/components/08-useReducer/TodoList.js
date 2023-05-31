
import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, handleToggle, handleDelete }) => {

    return (
        <>
            <h2 className="mb-3" > Todos ( { todos.length } ) </h2>

            <ul className="list-group">

                {
                    todos.map( ( todo, index ) => 

                        <TodoListItem
                            key={ todo.id }
                            index={ index }
                            todo={ todo } 
                            handleToggle={ handleToggle }
                            handleDelete={ handleDelete }
                        />                        
                    )
                }

            </ul>
            
        </>
    )
}

export default TodoList;
