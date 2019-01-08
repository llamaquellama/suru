'use strict';
const inputFiltro = document.querySelector('#txtFiltro')

let listaLugares = obtenerLugar();

mostrarListaLugares();
inputFiltro.addEventListener('keyup', mostrarListaLugares);
let arregloLugaresUsuario = getListarLugaresSeguidos();


function mostrarListaLugares() {
    let cardContainer = document.querySelector('#deck-lugares');
    let filtro = inputFiltro.value;
    cardContainer.innerHTML = '';
    for (let i = 0; i < listaLugares.length; i++) {
        if(listaLugares[i]['nombre'].toLowerCase().includes(filtro.toLowerCase())){

        // creación del card 
        let colLugar = document.createElement('div');
        colLugar.classList.add('col-md-4');

        let cardLugar = document.createElement('div');
        cardLugar.classList.add('card');
        colLugar.appendChild(cardLugar);

        let imgContainer = document.createElement('div');
        imgContainer.classList.add('imgContainer');
        cardLugar.appendChild(imgContainer);

        let imagenLugar = document.createElement('img');
        imagenLugar.src = listaLugares[i]['foto'];
        imagenLugar.classList.add('card-img-top');
        imgContainer.appendChild(imagenLugar);

        // Div Información Lugar
        let divCardBody = document.createElement('div');
        divCardBody.classList.add('card-body');
        divCardBody.classList.add('card-altura');


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
        boton.classList.add('btn');
        boton.classList.add('btn-danger');
        boton.classList.add('seguir');
        boton.textContent = 'Seguir';
        boton.addEventListener('click', function () {
            agregarLugarArreglo(listaLugares[i]);
        })

        let boton2 = document.createElement('button');
        boton2.type = 'button';
        boton2.classList.add('btn');
        boton2.classList.add('btn-outline-secondary');
        boton2.classList.add('ml-3');
        boton2.classList.add('dejarSeguir');
        boton2.textContent = 'Dejar de Seguir';
        boton2.addEventListener('click', function () {
            borrarLugarArreglo(listaLugares[i]._id);
        })

        
        divCardFooter.appendChild(boton);
        divCardFooter.appendChild(boton2);

        cardLugar.appendChild(divCardBody);
        cardLugar.appendChild(divCardFooter);
        cardContainer.appendChild(colLugar);
    }
   }
};


// Obtener lista lugares seguidos

function getListarLugaresSeguidos() {

    let usuarioInfo = obtenerUsuarioPorNombre(sessionStorage.getItem('nombreUsuario'));
    let lugaresInfoCompleta = [];

    if (usuarioInfo.lugares == undefined ||  usuarioInfo.lugares == "[]") {
        usuarioInfo.lugares = [];
    } else {
        usuarioInfo.lugares = JSON.parse(usuarioInfo.lugares);
    }
    return usuarioInfo.lugares;
}

function agregarLugarArreglo(infoLugar) {

    arregloLugaresUsuario.push(infoLugar._id);
    let usuarioInfo = obtenerUsuarioPorNombre(sessionStorage.getItem('nombreUsuario'));
    var arregloString = JSON.stringify(arregloLugaresUsuario);
    let respuesta = actualizarLugares(usuarioInfo.nombreUsuario, arregloString);

    if (respuesta.success) {

        swal({
            type: 'success',
            title: 'Ahora sigues este lugar',
        }).then(function () {
            window.location.href = "muroCliente.html";
        });
    }
    else {

        swal({
            type: 'warning',
            title: 'No se pudo seguir este lugar',
            text: respuesta.msg
        });
    }
}

function borrarLugarArreglo(id) {
    let listaLugaresIds = [];

    for (let i = 0; i < arregloLugaresUsuario.length; i++) {
        if(arregloLugaresUsuario[i] == id){
            arregloLugaresUsuario.splice(i, 1);
        }
    }

    listaLugares = JSON.stringify(arregloLugaresUsuario);

    let usuarioInfo = obtenerUsuarioPorNombre(sessionStorage.getItem('nombreUsuario'));

    let respuesta = actualizarLugares(usuarioInfo.nombreUsuario, listaLugares);

    if (respuesta.success) {

        swal({
            type: 'success',
            title: 'Ya no sigues este lugar.',
        }).then(function () {
            window.location.href = "muroCliente.html";
        });
    }
    else {

        swal({
            type: 'warning',
            title: 'Ocurrió un error',
            text: respuesta.msg
        });
    }
}