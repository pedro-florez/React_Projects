
import React from 'react'
import useSimpleForm from '../../hooks/useSimpleForm';

const TodoAdd = ({ handleAddTodo }) => {

    const [ formState, handleInputChange, reset ] = useSimpleForm({
        desc: ''            
    });

    const { desc } = formState;

    // Agregar Todo
    const handleSubmit = (e) => {

        e.preventDefault();

        // Validar Descripcion Vacia
        if ( desc.trim().length <= 1 ) {
            return;            
        }        

        // Enviar Datos al Reducer Padre
        handleAddTodo({
            id: new Date().getTime(),
            desc: desc,
            done: false
        });

        // Limpiar los campos
        reset();
    }

    return (
        <>
            <h2 className="mb-3"> Agregar Todo </h2>

            <form onSubmit={ handleSubmit }>

                <input 
                    type="text" 
                    className="form-control" 
                    name="desc"
                    value={ desc }
                    onChange={ handleInputChange }
                    autoComplete="off"
                    placeholder="Ingresar todo" 
                />

                <div className="d-grid mt-3">

                    <button 
                        type="submit" 
                        className="btn btn-primary">
                        Agregar
                    </button>

                </div>

            </form>            
        </>
    )
}

export default TodoAdd;
