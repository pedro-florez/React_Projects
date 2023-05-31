
/* Reducer
-------------------------------------------------- */
const todoReducer = ( state = [], { type, payload } ) => {

    switch ( type ) {

        case 'agregar':
            return [ ...state, payload ];

        case 'eliminar':
            return state.filter( todo => todo.id !== payload );

        case 'toggle':

            return state.map( todo =>                
                ( todo.id === payload ) ?
                    { ...todo, done: !todo.done } :
                    todo
            );

        case 'toggle-old':
            return state.map( todo => {

                if ( todo.id === payload ) {

                    return {
                        ...todo,
                        done: !todo.done
                    }

                }else {

                    return todo;
                }
            });
    
        default:

            return state;       
            
    }
    
}

export default todoReducer;
