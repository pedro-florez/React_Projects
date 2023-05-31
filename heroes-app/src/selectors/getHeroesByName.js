
import heroes from "../data/heroes";

const getHeroesByName = ( valor = '' ) => {

    // Validar datos
    if ( valor === '' ) {
        return [];        
    }

    // Convertir a Minuscula
    valor = valor.toLocaleLowerCase();

    return heroes.filter( hero => 
        hero.superhero.toLocaleLowerCase().includes( valor )
    );
}

export default getHeroesByName;