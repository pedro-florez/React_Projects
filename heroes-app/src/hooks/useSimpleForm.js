
import { useState } from 'react';

/* Custom Hook useSimpleForm ( Estado del los Inputs del formularios )
------------------------------------------------------------------------ */
const useSimpleForm = ( objetoInicial = {} ) => {
    
    const [formState, setFormState] = useState( objetoInicial );
    
    const handleInputChange = ({ target }) => {       

        setFormState({
            ...formState,
            [ target.name ]: target.value
        });
    }
    
    const reset = () => {

        setFormState( objetoInicial );
    }

    return [ formState, handleInputChange, reset ];
}

export default useSimpleForm;