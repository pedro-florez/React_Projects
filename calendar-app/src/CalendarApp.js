
import React from 'react';
import { Provider } from 'react-redux';

import store from './store/store';
import AppRouter from './routers/AppRouter';
import './styles.css';

const CalendarApp = () => {

    return ( 
        <Provider store={ store }>
            <AppRouter /> 
        </Provider>
    );
}

export default CalendarApp;