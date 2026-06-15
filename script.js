
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
document.addEventListener('DOMContentLoaded', () => {
    cargarDatosWikipedia();
    iniciarCarrito();
});

function cambiarModo() {
    document.body.classList.toggle('modo-dia');
}

const PRECIO_ALBUM = 30000;
const CUPON_VALIDO = "beatles15";
const DESCUENTO_CUPON = 15;

const IDS_ALBUMS = [
    "PleasePleaseMe", "WithTheBeatles", "AHardDaysNight", "BeatlesForSale",
    "Help", "RubberSoul", "Revolver", "SgtPeppersLonelyHeartsClubBand",
    "MagicalMysteryTour", "TheBeatlesWhiteAlbum", "YellowSubmarine",
    "AbbeyRoad", "LetItBe"
];

function calcularCompra() {
    let cantidadTotal = 0;
    let importeBruto = 0;

    for (const id of IDS_ALBUMS) {
        const cant = Number(document.getElementById("cant-" + id).value) || 0;
        const sub = cant * PRECIO_ALBUM;
        cantidadTotal += cant;
        importeBruto += sub;
        const elSub = document.getElementById("sub-" + id);
        if (elSub) elSub.innerText = "$" + sub.toLocaleString('es-AR');
    }

    let porcentajeDescuento = 0;
    if (cantidadTotal >= 100) {
        porcentajeDescuento = 20;
    } else if (cantidadTotal >= 10) {
        porcentajeDescuento = 10;
    } else if (cantidadTotal >= 5) {
        porcentajeDescuento = 5;
    }

    const inputCupon = document.getElementById("input-cupon");
    const msgCupon = document.getElementById("msg-cupon");
    let cuponAplicado = false;

    if (inputCupon && inputCupon.value.trim().toLowerCase() === CUPON_VALIDO) {
        cuponAplicado = true;
        if (msgCupon) {
            msgCupon.className = "ok";
            msgCupon.innerText = "✓ Cupón aplicado: 15% de descuento adicional";
        }
    } else if (inputCupon && inputCupon.value.trim() !== "") {
        if (msgCupon) {
            msgCupon.className = "error";
            msgCupon.innerText = "✗ Cupón inválido";
        }
    } else {
        if (msgCupon) {
            msgCupon.className = "";
            msgCupon.innerText = "";
        }
    }

    let descuentoVolumen = importeBruto * (porcentajeDescuento / 100);
    let baseTrasCupon = importeBruto - descuentoVolumen;
    let descuentoCupon = cuponAplicado ? baseTrasCupon * (DESCUENTO_CUPON / 100) : 0;
    let montoDescuentoTotal = descuentoVolumen + descuentoCupon;
    let totalPagar = importeBruto - montoDescuentoTotal;

    const elDescLabel = document.getElementById("res-descuento");
    if (elDescLabel) {
        let label = porcentajeDescuento + "%";
        if (cuponAplicado) label += " + 15% cupón";
        elDescLabel.innerText = label;
    }

    const elCantidad = document.getElementById("res-cantidad");
    const elBruto = document.getElementById("res-bruto");
    const elDescMonto = document.getElementById("res-descuento-monto");
    const elTotal = document.getElementById("res-total");

    if (elCantidad) elCantidad.innerText = cantidadTotal;
    if (elBruto) elBruto.innerText = "$" + importeBruto.toLocaleString('es-AR');
    if (elDescMonto) elDescMonto.innerText = "$" + montoDescuentoTotal.toLocaleString('es-AR');
    if (elTotal) elTotal.innerText = "$" + totalPagar.toLocaleString('es-AR');
}

function iniciarCarrito() {
    for (const id of IDS_ALBUMS) {
        const input = document.getElementById("cant-" + id);
        if (input) input.addEventListener("input", calcularCompra);
    }
    const inputCupon = document.getElementById("input-cupon");
    if (inputCupon) inputCupon.addEventListener("input", calcularCompra);
}
