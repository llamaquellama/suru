'use strict';

const inputFiltro = document.querySelector('#txtFiltro')

let listaLugares = obtenerLugar();

mostrarListaLugares();
inputFiltro.addEventListener('keyup', mostrarListaLugares);


function mostrarListaLugares() {
    let tbody = document.querySelector('#tablaLugares tbody');
    let filtro = inputFiltro.value;

    tbody.innerHTML = '';
    
    for (let i = 0; i < listaLugares.length; i++) {
        if(listaLugares[i]['nombre'].toLowerCase().includes(filtro.toLowerCase()) || listaLugares[i]['categoria'].toLowerCase().includes(filtro.toLowerCase())){
            let fila = tbody.insertRow();

            let celdaNombre = fila.insertCell();
            let celdaCategoria = fila.insertCell();
            //let celdaDescripcion = fila.insertCell();
            //let celdaFacebook = fila.insertCell();
            //let celdaTwitter = fila.insertCell();
            //let celdaInstagram = fila.insertCell();
            //let celdaGoogle = fila.insertCell();
            let celdaProvincia = fila.insertCell();
            let celdaDistrito = fila.insertCell();
            let celdaCanton = fila.insertCell();
            //let celdaUbicacion = fila.insertCell();
            // let celdaBtnVer = fila.insertCell();
            // let celdaBtnEditar = fila.insertCell();
            // let celdaBtnEliminar = fila.insertCell();
            let celdaConfiguracion = fila.insertCell();
            
             celdaNombre.innerHTML = listaLugares[i]['nombre'];
             celdaCategoria.innerHTML = listaLugares[i]['categoria'];
             //celdaDescripcion.innerHTML = listaLugares[i]['descripcion'];
            // celdaFacebook.innerHTML = listaLugares[i]['facebook'];
             //celdaTwitter.innerHTML = listaLugares[i]['twitter'];
             //celdaInstagram.innerHTML = listaLugares[i]['instagram'];
            // celdaGoogle.innerHTML = listaLugares[i]['google'];
             celdaProvincia.innerHTML = listaLugares[i]['provincia'];
             celdaDistrito.innerHTML = listaLugares[i]['distrito'];
             celdaCanton.innerHTML = listaLugares[i]['canton'];
             //celdaUbicacion.innerHTML = listaLugares[i]['ubicacion'];
            //  celdaBtnVer.innerHTML = '<i id="btn_ver_'+i+'" class="btn_ver btn_ver far fa-eye"></i>';
            //  celdaBtnEditar.innerHTML = '<i id="btn_ver_'+i+'" class="btn_ver fas fa-edit"></i>';
            //  celdaBtnEliminar.innerHTML = '<i id="btn_ver_'+i+'" class="btn_ver fas fa-trash-alt"></i>';

             let botonVerMas = document.createElement('a');
             botonVerMas.href = '#';
             botonVerMas.classList.add('far');
             botonVerMas.classList.add('fa-eye');
             botonVerMas.dataset.id_lugar = listaLugares[i]['_id'];

             botonVerMas.addEventListener('click', visualizarLugar);

             celdaConfiguracion.appendChild(botonVerMas);
        }
    }
};


function visualizarLugar(){
    alert(this.dataset.id_lugar);
};