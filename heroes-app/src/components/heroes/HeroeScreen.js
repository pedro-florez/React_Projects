
import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router';
import getHeroById from '../../selectors/getHeroById';

const HeroeScreen = ({ history }) => {

    // Hook de React Router DOM
    const { heroeId } = useParams();

    //const heroe = getHeroById( heroeId );

    // Optimizacion
    const heroe = useMemo(() =>
        getHeroById( heroeId ), [ heroeId ]
    );    

    // Validar si Existe el Heroe
    if ( !heroe ) {        
        return <Redirect to="/" />
    }

    const {
        id, 
        superhero,
        publisher,
        alter_ego,
        first_appearance, 
        characters
    } = heroe;

    const handleReturn = () => {

        // Validar si no entro al home
        ( history.length <= 2 ) ?
        history.push('/') :         
        history.goBack();
    }
    
    return (
        <>
            <h1>Heroe Screen</h1>
            <hr/>

            <div className="row no-gutters">

                <div className="col-md-4 ps-0 pe-0">
                    <img 
                        src={ `../assets/img/heroes/${ id }.jpg` } 
                        alt={ superhero } 
                        className="card-img animate__animated animate__fadeInLeft" 
                    />
                </div>

                <div className="col-md-8">

                    <div className="card-body">

                        <h3> { superhero } </h3>

                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <b>Alter ego: </b> { alter_ego }
                            </li>
                            <li className="list-group-item">
                                <b>Publisher: </b> { publisher }
                            </li>
                            <li className="list-group-item">
                                <b>First appearance: </b> { first_appearance }
                            </li>
                        </ul> 

                        <h5> Characters </h5>
                        <p>&ensp; { characters } </p>

                        <button 
                            type="button"
                            className="btn btn-outline-primary"
                            onClick={ handleReturn }>
                            Regresar
                        </button>
                                                
                    </div>

                </div>                

            </div>          
        </>
    )
}

export default HeroeScreen;
