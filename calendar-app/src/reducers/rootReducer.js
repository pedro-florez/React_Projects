
import { combineReducers } from 'redux';

import authReducer from './authReducer';
import uiReducer from './uiReducer';
import eventReducer from './eventReducer';

// Agregar Varios ( Reducers )
const rootReducer = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    calendar: eventReducer
});

export default rootReducer;
