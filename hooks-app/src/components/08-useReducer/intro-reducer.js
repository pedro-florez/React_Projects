
/* Introducción a Reducer
-------------------------------------------------- */
/*
** Nota: El Reducer es parecido a un Controlador de Laravel,
** No se pueden realizar Peticiones y llamar funciones dentro
** del Reducer, Todo debe resolverce dentro de el y siempre 
** debe devolver algo. 
*/

const initialState = [{
    id: 1,
    todo: 'Comprar Pan',
    done: false
}];


/*Controlador de Tareas ( Reducer )
-------------------------------------------------- */
const todoReducer = ( state = initialState, action ) => {

    // Accion Agregar
    if ( action?.type === 'agregar' ) {

        // Devolver un Nuevo Objeto
        return [ ...state, action.payload ];        
    }

    return state;
}

/* Mostrar todas las Tareas
-------------------------------------------------- */
let todos = todoReducer();

/* Agregar Nueva Tarea
-------------------------------------------------- */
const newTodo = {
    id: 2,
    todo: 'Comprar Leche',
    done: false
}

// Preparar Datos a Enviar
const agregarTodoAction = {
    type: 'agregar',
    payload: newTodo
}

// Enviar al Reducer
todos = todoReducer( todos, agregarTodoAction );


console.log('🚀 todos', todos);
