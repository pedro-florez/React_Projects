
import { getSaludo } from '../../components/02-template-string';
import '@testing-library/jest-dom'; // Metodos como toBe

test('getSaludo debe retorna Hola Pedro Florez', () => {

    const nombre = 'Pedro Florez';

    const saludo = getSaludo( nombre );

    expect( saludo ).toBe( 'Hola ' + nombre + '!');
})

test('getSaludo debe retorna Hola Snaider si no hay argumentos', () => {    

    const saludo = getSaludo();

    expect( saludo ).toBe( 'Hola Snaider!');
})

