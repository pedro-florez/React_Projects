
/* Crear Prueba 
/* Agrupar Test describe()
-------------------------------------------------- */
describe('Pruebas del Archivo demo.test.js', () => {

    test('Debe ser iguales los strings', () => {

        // 1. Inicialización
        const mensaje1 = 'Hola mundo';
        
        // 2. Estimulo
        const mensaje2 = "Hola mundo";

        // 3. Observar el Comportamiento
        expect( mensaje1 ).toBe( mensaje2 ); // Comparacion
    })
});
