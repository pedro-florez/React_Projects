
import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from '../../components/05-funciones';

test('getUser debe retornar un Objeto', () => {

    const userTest = {
        uid: 'ABC123',
        username: 'Pedro123'
    };

    const user = getUser();

    // Validar Objetos Iguales
    expect( user ).toEqual( userTest );    
})

test('getUsuarioActivo debe retornar un Objeto con parametro', () => {

    const nombre = 'Snaider Ferrer' 

    const userActivo = getUsuarioActivo( nombre );

    // Validar Objetos Iguales
    expect( userActivo ).toEqual({
        uid: 'ABC567',
        username: nombre
    });    
})
