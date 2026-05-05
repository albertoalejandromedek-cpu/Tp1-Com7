
const cargarDatosWikipedia = async () => {
    
    const contenedores = document.querySelectorAll('.integrante');

    for (const div of contenedores) {
        
        const nombreParaWiki = div.getAttribute('data-nombre');
        
        if (!nombreParaWiki) continue;

        const url = `https://es.wikipedia.org/api/rest_v1/page/summary/${nombreParaWiki}`;

        try {
            const respuesta = await fetch(url);
            
            if (!respuesta.ok) throw new Error('Error en la petición');

            const datos = await respuesta.json();

            const parrafo = div.querySelector('p');
            if (parrafo) {
                parrafo.innerText = datos.extract;
            }

            const enlace = div.querySelector('a');
            if (enlace) {
                enlace.href = datos.content_urls.desktop.page;
                enlace.innerText = `Leer más sobre ${datos.title} en Wikipedia`;
            }
        } catch (error) {
            console.error(`No se pudo obtener información de ${nombreParaWiki}:`, error);
            const parrafo = div.querySelector('p');
            if (parrafo) {
                parrafo.innerText = "La información no está disponible en este momento.";
            }
        }
    }
};
document.addEventListener('DOMContentLoaded', cargarDatosWikipedia);