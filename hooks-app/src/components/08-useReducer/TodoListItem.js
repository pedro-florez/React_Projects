

import React from 'react';

const TodoListItem = ({ index, todo, handleToggle, handleDelete }) => {

    const { id, desc, done } = todo;

    return (                    
        <li             
            className="list-group-item">

            <small 
                className={ `todo__item ${ done && 'complete' }` } 
                onClick={ () => { handleToggle( id ) } }>
                { index + 1 }.  { desc } 
            </small> 

            <button 
                type="button" 
                className="btn btn-danger float-end"
                onClick={ () => { handleDelete( id ) } }>
                Eliminar
            </button>

        </li>
    )
}

export default TodoListItem;
