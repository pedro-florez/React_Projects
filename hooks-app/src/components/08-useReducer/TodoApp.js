
import React, { useEffect, useReducer } from 'react';
import todoReducer from './todoReducer';

import TodoList from './TodoList';
import TodoAdd from './TodoAdd';

const init = () => {
    
    /* Obtener el Objeto Todos
    ** Si Existe String Devuelve el Objeto O Devuele un Objeto Vacio 
    */
    return JSON.parse( localStorage.getItem('todos') ) || [];
};

const TodoApp = () => {
    
    const [ todos, dispatch ] = useReducer( todoReducer, [], init );

    // Almacenar Datos en el LocalStorage
    useEffect(() => {

        localStorage.setItem( 'todos', JSON.stringify(todos) );
          
    }, [todos]);

    // Accion Agregar
    const handleAddTodo = ( newTodo ) => {

        dispatch({
            type: 'agregar',
            payload: newTodo
        });
    }

    // Accion Cambiar Estado Completado o Pendiente ( toggle )
    const handleToggle = ( todoID ) => {

        dispatch({
            type: 'toggle',
            payload: todoID
        });
    }

    // Accion Eliminar
    const handleDelete = ( todoID ) => {

        // Validar eliminacion
        if ( !window.confirm('¿Estas seguro(a) de eliminar esta tarea?') ) {
            return;
        }

        dispatch({
            type: 'eliminar',
            payload: todoID
        });        
    }

    return (
        <>
            <h1>🚀 Todo App useReducer()</h1>          
            <hr/>            

            <div className="row">                

                <div className="col-7">

                    <TodoList 
                        todos={ todos } 
                        handleToggle={ handleToggle }
                        handleDelete={ handleDelete }
                    />

                </div>

                <div className="col-5">

                    <TodoAdd handleAddTodo={ handleAddTodo } />

                </div>

            </div>            
        </>
    )
}

export default TodoApp;
