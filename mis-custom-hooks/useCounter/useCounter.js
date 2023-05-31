
import { useState } from 'react';

/* Custom Hook useCounter ( Contador )
-------------------------------------------------- */
const useCounter = ( valorInicial = 10 ) => {

    const [counter, setCounter] = useState( valorInicial );

    const increment = () => {
        setCounter( counter + 1 );
    }
    
    const decrement = () => {
        setCounter( counter - 1 );
    }

    const reset = () => {
        setCounter( valorInicial );
    }

    return {
        counter,
        increment,
        decrement,
        reset      
    };
}

export default useCounter;
