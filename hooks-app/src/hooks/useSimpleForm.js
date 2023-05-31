
import { useState } from 'react';

/* Custom Hook useSimpleForm ( Estado del los Inputs del formularios )
------------------------------------------------------------------------ */
const useSimpleForm = ( objetoInicial = {} ) => {

    // Estado inicial
    const [formState, setFormState] = useState( objetoInicial );

    // Actualizar Valor
    const handleInputChange = ({ target }) => {       

        setFormState({
            ...formState,
            [ target.name ]: target.value
        });
    }

    // Limpiar Campos del Formaulario
    const reset = () => {

        setFormState( objetoInicial );
    }

    return [ formState, handleInputChange, reset ];
}

export default useSimpleForm;
