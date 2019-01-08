'use strict';

let listaLugares = obtenerLugar();

mostrarListaLugares();
let arregloLugaresUsuario = getListarLugaresSeguidos();
;

function mostrarListaLugares() {
    let cardContainer = document.querySelector('#deck-lugares');

    for (let i = 0; i < listaLugares.length; i++) {

        // creación del card 
        let colLugar = document.createElement('div');
        colLugar.classList.add('col-md-4');

        let cardLugar = document.createElement('div');
        cardLugar.classList.add('card');
        colLugar.appendChild(cardLugar);

        let imagenLugar = document.createElement('img');
        imagenLugar.src = listaLugares[i]['foto'];
        imagenLugar.classList.add('card-img-top');
        cardLugar.appendChild(imagenLugar);

        // Div Información Lugar
        let divCardBody = document.createElement('div');
        divCardBody.classList.add('card-body');


        let nombreLugar = document.createElement('h5');
        nombreLugar.classList.add('card-title');
        nombreLugar.innerText = listaLugares[i]['nombre'];
        divCardBody.appendChild(nombreLugar);

        let descripcionLugar = document.createElement('p');
        descripcionLugar.classList.add('mt-3');
        descripcionLugar.classList.add('card-text');
        descripcionLugar.innerText = listaLugares[i]['descripcion'];
        divCardBody.appendChild(descripcionLugar);


 
        // Card footer boton
        let divCardFooter = document.createElement('div');
        divCardFooter.classList.add('card-footer');


        let boton = document.createElement('button');
        boton.type = 'button';
        boton.textContent = 'Seguir';
        boton.addEventListener('click', function () {
            agregarLugarArreglo(listaLugares[i]);
        })
        
        divCardFooter.appendChild(boton);

        cardLugar.appendChild(divCardBody);
        cardLugar.appendChild(divCardFooter);
        cardContainer.appendChild(colLugar);
    }
};


// Obtener lista lugares seguidos

function getListarLugaresSeguidos() {

    let usuarioInfo = obtenerUsuarioPorNombre(sessionStorage.getItem('nombreUsuario'));

    if (usuarioInfo.lugares == undefined) {
        usuarioInfo.lugares = [];
    } else {
        usuarioInfo.lugares = JSON.parse(usuarioInfo.lugares);
    }
    return usuarioInfo.lugares;
}

function agregarLugarArreglo(infoLugar) {

    arregloLugaresUsuario.push(infoLugar);
    let usuarioInfo = obtenerUsuarioPorNombre(sessionStorage.getItem('nombreUsuario'));
    var arregloString = JSON.stringify(arregloLugaresUsuario);
    actualizarLugares(usuarioInfo.nombreUsuario, arregloString);
}


//let nombreUsuarioSession = sessionStorage.getItem('nombreUsuario');
