
/* Almacenar Variable Token ( JWT )
-------------------------------------------- */
export const almacenarToken = ( token ) => {
    
    localStorage.setItem( 'token', token );

    // Almacenar la fecha y hora de cracion del Token
    localStorage.setItem( 'token-init-date', new Date().getTime() );
}