
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers/rootReducer';

// Activar Extension de ( Redux DevTools )
const composeEnhancers = (
    typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose;

// Crear el ( Store Dev )
const store = createStore(
    rootReducer,
    composeEnhancers(
        // Activar Middleware
        applyMiddleware( thunk )
    )
);

// ( Store Production )
/* const store = createStore(
    rootReducer,    
    applyMiddleware( thunk )    
); */

export default store;
