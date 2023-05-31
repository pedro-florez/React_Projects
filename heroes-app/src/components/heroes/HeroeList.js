
import React, { useMemo } from 'react';
import getHeroesByPublisher from '../../selectors/getHeroesByPublisher';
import HeroeCard from './HeroeCard';

const HeroeList = ({ plublisher }) => {    

    //const heroes = getHeroesByPublisher( plublisher );

    // Optimizacion
    const heroes = useMemo(() =>
        getHeroesByPublisher( plublisher ), [ plublisher ]
    );    

    // Enivar Varias props sin atributos  { ...hero }
    return (
        <div className="row row-cols-1 row-cols-md-2 g-4 animate__animated animate__fadeIn">

            {
                heroes.map( hero =>

                    <HeroeCard key={ hero.id } { ...hero } />
                )
            }

        </div>
    );
}
export default HeroeList;
