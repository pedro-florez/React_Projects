
import React from 'react';
import ReactDOM from 'react-dom';
//import PrimeraApp from './components/PrimerComponent';
import CounterApp from './components/CounterApp';
import './assets/index.css';

//const saludo = <h1>Hola, Bienvenido a React.</h1>;

const divApp = document.querySelector('#root');

/*
ReactDOM.render(saludo, divApp);
ReactDOM.render(<PrimeraApp mensaje="Empesaremos en unos minutos..." numero={ 123 } />, divApp);
*/
ReactDOM.render(<CounterApp valor={ 10 } />, divApp);

