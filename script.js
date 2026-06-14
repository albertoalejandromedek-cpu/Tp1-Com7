
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

let modoNoche = false;

function cambiarModo() {
    modoNoche = !modoNoche;
    if (modoNoche) {
        document.body.style.backgroundColor = "#F5F5DC";
        document.body.style.color = "black";
        
    } else {
        document.body.style.backgroundColor = "#000000";
        document.body.style.color = "#F5F5DC";
       
    }
}

function calcularCompra() {
    
    let cantPleasePleaseMe = Number(document.getElementById("cant-PleasePleaseMe").value) || 0;
    let cantWithTheBeatles = Number(document.getElementById("cant-WithTheBeatles").value) || 0;
    let cantAHardDaysNight = Number(document.getElementById("cant-AHardDaysNight").value) || 0;
    let cantBeatlesForSale = Number(document.getElementById("cant-BeatlesForSale").value) || 0;
    let cantHelp = Number(document.getElementById("cant-Help").value) || 0;
    let cantRubberSoul = Number(document.getElementById("cant-RubberSoul").value) || 0;
    let cantRevolver = Number(document.getElementById("cant-Revolver").value) || 0;
    let cantSgtPeppersLonelyHeartsClubBand = Number(document.getElementById("cant-SgtPeppersLonelyHeartsClubBand").value) || 0;
    let cantMagicalMysteryTour = Number(document.getElementById("cant-MagicalMysteryTour").value) || 0;
    let cantTheBeatlesWhiteAlbum = Number(document.getElementById("cant-TheBeatlesWhiteAlbum").value) || 0;
    let cantYellowSubmarine = Number(document.getElementById("cant-YellowSubmarine").value) || 0;
    let cantAbbeyRoad = Number(document.getElementById("cant-AbbeyRoad").value) || 0;
    let cantLetItBe = Number(document.getElementById("cant-LetItBe").value) || 0;

    
    let precioPleasePleaseMe = 30000;
    let precioWithTheBeatles = 30000;
    let precioAHardDaysNight = 30000;
    let precioBeatlesForSale = 30000;
    let precioHelp = 30000;
    let precioRubberSoul = 30000;
    let precioRevolver = 30000;
    let precioSgtPeppersLonelyHeartsClubBand = 30000;
    let precioMagicalMysteryTour = 30000;
    let precioTheBeatlesWhiteAlbum = 30000;
    let precioYellowSubmarine = 30000;
    let precioAbbeyRoad = 30000;
    let precioLetItBe = 30000;

    
    let subPleasePleaseMe = cantPleasePleaseMe * precioPleasePleaseMe;
    let subWithTheBeatles = cantWithTheBeatles * precioWithTheBeatles;
    let subAHardDaysNight = cantAHardDaysNight * precioAHardDaysNight;
    let subBeatlesForSale = cantBeatlesForSale * precioBeatlesForSale;
    let subHelp = cantHelp * precioHelp;
    let subRubberSoul = cantRubberSoul * precioRubberSoul;
    let subRevolver = cantRevolver * precioRevolver;
    let subSgtPeppersLonelyHeartsClubBand = cantSgtPeppersLonelyHeartsClubBand * precioSgtPeppersLonelyHeartsClubBand;
    let subMagicalMysteryTour = cantMagicalMysteryTour * precioMagicalMysteryTour;
    let subTheBeatlesWhiteAlbum = cantTheBeatlesWhiteAlbum * precioTheBeatlesWhiteAlbum;
    let subYellowSubmarine = cantYellowSubmarine * precioYellowSubmarine;
    let subAbbeyRoad = cantAbbeyRoad * precioAbbeyRoad;
    let subLetItBe = cantLetItBe * precioLetItBe;

    
    document.getElementById("sub-PleasePleaseMe").innerText = "$" + subPleasePleaseMe.toLocaleString('es-AR');
    document.getElementById("sub-WithTheBeatles").innerText = "$" + subWithTheBeatles.toLocaleString('es-AR');
    document.getElementById("sub-AHardDaysNight").innerText = "$" + subAHardDaysNight.toLocaleString('es-AR');
    document.getElementById("sub-BeatlesForSale").innerText = "$" + subBeatlesForSale.toLocaleString('es-AR');
    document.getElementById("sub-Help").innerText = "$" + subHelp.toLocaleString('es-AR');
    document.getElementById("sub-RubberSoul").innerText = "$" + subRubberSoul.toLocaleString('es-AR');
    document.getElementById("sub-Revolver").innerText = "$" + subRevolver.toLocaleString('es-AR');
    document.getElementById("sub-SgtPeppersLonelyHeartsClubBand").innerText = "$" + subSgtPeppersLonelyHeartsClubBand.toLocaleString('es-AR');
    document.getElementById("sub-MagicalMysteryTour").innerText = "$" + subMagicalMysteryTour.toLocaleString('es-AR');
    document.getElementById("sub-TheBeatlesWhiteAlbum").innerText = "$" + subTheBeatlesWhiteAlbum.toLocaleString('es-AR');
    document.getElementById("sub-YellowSubmarine").innerText = "$" + subYellowSubmarine.toLocaleString('es-AR');
    document.getElementById("sub-AbbeyRoad").innerText = "$" + subAbbeyRoad.toLocaleString('es-AR');
    document.getElementById("sub-LetItBe").innerText = "$" + subLetItBe.toLocaleString('es-AR');
    
    let cantidadTotal = cantPleasePleaseMe + cantWithTheBeatles + cantAHardDaysNight + cantBeatlesForSale + cantHelp + cantRubberSoul + cantRevolver + cantSgtPeppersLonelyHeartsClubBand + cantMagicalMysteryTour + cantTheBeatlesWhiteAlbum + cantYellowSubmarine + cantAbbeyRoad + cantLetItBe;
    let importeBruto = subPleasePleaseMe + subWithTheBeatles + subAHardDaysNight + subBeatlesForSale + subHelp + subRubberSoul + subRevolver + subSgtPeppersLonelyHeartsClubBand + subMagicalMysteryTour + subTheBeatlesWhiteAlbum + subYellowSubmarine + subAbbeyRoad + subLetItBe;

    
    let porcentajeDescuento = 0;

    if (cantidadTotal >= 100) {
        porcentajeDescuento = 20;
    } else if (cantidadTotal >= 10) {
        porcentajeDescuento = 10;
    } else if (cantidadTotal >= 5) {
        porcentajeDescuento = 5;
    } else {
        porcentajeDescuento = 0;
    }

    
    let montoDescuento = importeBruto * (porcentajeDescuento / 100);
    let totalPagar = importeBruto - montoDescuento;

    
    document.getElementById("res-cantidad").innerText = cantidadTotal;
    document.getElementById("res-bruto").innerText = "$" + importeBruto.toLocaleString('es-AR');
    document.getElementById("res-descuento").innerText = porcentajeDescuento + "%";
    document.getElementById("res-descuento-monto").innerText = "$" + montoDescuento.toLocaleString('es-AR');
    document.getElementById("res-total").innerText = "$" + totalPagar.toLocaleString('es-AR');
}
