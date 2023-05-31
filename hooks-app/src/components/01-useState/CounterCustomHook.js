
import React from 'react';
import useCounter from '../../hooks/useCounter';

const CounterCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter();

    return (
        <>
            <h1>🚀 Counter Custom Hook { counter } </h1>
            <hr/>

            <button className="btn btn-success" onClick={ increment }> + 1 </button>
            &ensp;&ensp;
            <button className="btn btn-primary" onClick={ reset }> Reiniciar </button>
            &ensp;&ensp;
            <button className="btn btn-warning" onClick={ decrement }> - 1 </button>
        </>
    )
}

export default CounterCustomHook;
