
import React, { useMemo } from 'react';
import { useLocation } from 'react-router';
import queryString from 'query-string';

import useSimpleForm from '../../hooks/useSimpleForm';
import getHeroesByName from '../../selectors/getHeroesByName';
import HeroeCard from '../heroes/HeroeCard';

const SearchScreen = ({ history }) => {

    // Hook de React Router DOM
    const location = useLocation();
    //console.log('🚀 location', location.search)

    // Query String para trabajar con Urls
    // Obtener el Parametro de la Url
    const { q = '' } = queryString.parse( location.search );

    const [ { searchText }, handleInputChange ] = useSimpleForm({
        searchText: q
    });    

    //const heroesFilter = getHeroesByName( searchText );

    const heroesFilter = useMemo( () =>
        getHeroesByName( q )
    , [ q ]);

    const handleSearch = (e) => {

        e.preventDefault();
        
        // Agregar Parametros a la Url
        history.push( `?q=${ searchText }` );
    }

    return (
        <>
            <h1>Search Screen</h1>
            <hr/>

            <div className="row">

                <div className="col-5">

                    <h4>Search Form</h4>
                    <hr/>

                    <form onSubmit={ handleSearch }>

                        <input 
                            type="text"
                            className="form-control"
                            name="searchText"
                            value={ searchText }
                            onChange={ handleInputChange }
                            placeholder="Ingresar heroe..."
                            autoComplete="off"
                        />

                        <button 
                            type="submit"
                            className="btn btn-primary mt-3">
                            Buscar
                        </button>

                    </form>

                </div>

                <div className="col-7">

                    <h4>Resultados</h4>
                    <hr/>

                    {
                        ( q === '' ) &&
                        <div className="alert alert-primary">
                            Aún no has buscado un héroe.
                        </div>
                    }

                    {
                        ( q !== '' && heroesFilter.length === 0 ) &&
                        <div className="alert alert-warning">
                            Lo sentimos, el héroe "{ q }" no fue encontrado.
                        </div>
                    }

                    {
                        heroesFilter.map( hero =>

                            <HeroeCard
                                key={ hero.id }
                                { ...hero }
                            />                                                       
                        )
                    }

                </div>

            </div>
        </>
    );
}

export default SearchScreen;