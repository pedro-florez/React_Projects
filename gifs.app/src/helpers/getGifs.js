
/* Buscar Gifs en la Api GIPHY
-------------------------------------------------- */
const getGifs = async( search ) => {

    // Escapar string encodeURI(string)
    // Bartils => Alt + 96 ``
    // Comentarios en Bloque => Mayus + Alt + A
    
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(search) }&limit=10&api_key=Fs6qTUI6lZFhID2zfLBSPFJHQsNQpuPp`;
    const res  = await fetch( url );
    const { data } = await res.json();

    // Obtener Informacion
    const gifs = data.map( img => {
        
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs;
}

export default getGifs;
